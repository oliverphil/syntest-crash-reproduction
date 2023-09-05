import * as fs from 'fs';
import {Crash, PackageFormat} from '../crashTypes/ImportTypes';
import {StackTraceProcessor} from './preprocessing/StackTraceProcessor';
import {execSync} from "child_process";

/**
 * Generate environments for each crash to be reproduced
 * Environments include a package.json and Dockerfile for each crash
 */
export class EnvironmentGenerator {

  /**
   * Generate the environments for each crash
   * @return {Crash[]} the crashes
   */
  public generate(): Crash[] {
    const crashes: Crash[] = [];
    this.loadAssets(undefined, undefined, undefined).forEach((crash) => {
      this.generatePackage(crash);
      this.generateDockerfile(crash);
      crashes.push(crash);
    });
    return crashes;
  }

  private handleBugsjs(project: string) {
    const assetDir = './benchmark/crashes/bugsjs';
    const assetDirContents = fs.readdirSync(assetDir).filter((value) => value !== '.gitignore'
        && value !== 'seeded' && (!project || value === project));
    const assetSubDirs = assetDirContents.map((projItem) => {
      return [projItem, fs.readdirSync(`${assetDir}/${projItem}`), false];
    });

    return assetSubDirs;
  }

  private handleSeeded(project: string) {
    const assetDir = './benchmark/crashes/seeded';
    const assetDirContents = fs.readdirSync(`${assetDir}`).filter((value) =>
        value !== 'http-server' && value !== '' && (!project || value.startsWith(project)));
    const assetSubDirs = assetDirContents.map((projItem) => {
      return [projItem, fs.readdirSync(`${assetDir}/${projItem}`), false];
    });

    return assetSubDirs;
  }

  private handleSyntest(project: string) {
    const assetDir = './benchmark/crashes/syntest-collected';
    const assetDirContents = fs.readdirSync(assetDir).filter((value) => value !== '.gitignore'
        && value !== 'seeded' && (!project || value === project));
    const assetSubDirs = assetDirContents.map((projItem) => {
      return [projItem, fs.readdirSync(`${assetDir}/${projItem}`).filter(value => value !== 'commander'
          && value !== 'express' && value !== 'javascript-algorithms'
          && value !== 'lodash'), false];
    });

    return assetSubDirs;
  }

  private handleGithub(project: string) {
    const assetDir = './benchmark/crashes/github';
    const assetDirContents = fs.readdirSync(assetDir).filter((value) => value !== '.gitignore'
        && value !== 'seeded' && value !== 'bugsjs' && value !== 'syntest-collected' && (!project || value === project));
    const assetSubDirs = assetDirContents.map((projItem) => {
      return [projItem, fs.readdirSync(`${assetDir}/${projItem}`), false];
    });

    return assetSubDirs;
  }

  private handleSecbench(project: string) {
    const assetDir = './benchmark/crashes/secbench';
    const assetDirContents = fs.readdirSync(assetDir).filter((value) => value !== '.gitignore'
        && value !== 'seeded' && value !== 'bugsjs' && value !== 'syntest-collected' && (!project || value === project));
    const assetSubDirs = assetDirContents.map((projItem) => {
      return [projItem, fs.readdirSync(`${assetDir}/${projItem}`), false];
    });

    return assetSubDirs;
  }

  private handleSyntestType(project: string, syntestType: string) {
    let assetDir = './benchmark/crashes';
    let assetSubDirs = [];
    switch(syntestType) {
      case 'bugsjs':
        assetDir = './benchmark/crashes/bugsjs';
        assetSubDirs = this.handleBugsjs(project);
        break;
      case 'seeded':
        assetDir = './benchmark/crashes/seeded';
        assetSubDirs = this.handleSeeded(project);
        break;
      case 'syntest-collected':
        assetDir = './benchmark/crashes/syntest-collected';
        assetSubDirs = this.handleSyntest(project);
        break;
      case 'github':
        assetDir = './benchmark/crashes/github';
        assetSubDirs = this.handleGithub(project);
        break;
      case 'secbench':
        assetDir = './benchmark/crashes/secbench';
        assetSubDirs = this.handleSecbench(project);
        break;
    }

    const projectsArray = assetSubDirs.map((value) => {
      const projectsArray = [];
      (value[1] as string[]).forEach((p) => {
        projectsArray.push([value[0] as string, p, value[2]]);
      });
      return projectsArray;
    });
    const crashInfo = [];
    projectsArray.forEach(proj => {
      crashInfo.push(...proj.map((crashFileItem) => {
        const projectName = crashFileItem[0];
        const crashName = crashFileItem[1];
        let crashFileString = `${assetDir}/${projectName}/${crashName}/${crashName}`;
        if (crashFileItem[2]) {
          crashFileString = `${assetDir}/seeded/${projectName}/${crashName}/${crashName}`;
        }
        return [
          projectName,
          crashName,
          fs.readFileSync(`${crashFileString}.json`),
          fs.readFileSync(`${crashFileString}.log`),
          crashFileItem[2],
        ];
      }));
    });
    return crashInfo;
  }

  /**
   * Load crash information from json files
   * @private
   * @return {Crash[]} an observable to provide crashes
   */
  loadAssets(project: string | undefined, syntestType: string | undefined, syntestCrash: string[] | undefined): Crash[] {
    console.log('Loading Crashes... ');
    const assetDir = './benchmark/crashes';
    const crashInfo = this.handleSyntestType(project, syntestType);

    const crashes = crashInfo.filter(crash => !['atom-22772', 'webpack-9114'].includes(crash[1])).map((value) => {
      const projectName = value[0];
      const crashName = value[1];
      const crashFile = value[2];
      const logFile = value[3];
      // console.log(crashName);
      const crash: Crash = {
        project: projectName,
        stackTrace: StackTraceProcessor.process(logFile.toString(), false),
        ...JSON.parse(crashFile.toString()),
        crashId: crashName,
        seeded: value[4]
      };
      // for (const line of crash.stackTrace.trace) {
      //   if (line.dependency) {
      //     crash.dependencies[line.dependency] = '*';
      //   }
      // }
      if (crash.requireCrashDependency) {
        crash.dependencies[crash.project] = crash.version;
      }
      if (crash.project === 'node') {
        try {
          const nodeVersion = crash.nodeVersion || crash.version;
          const tarName = `node-v${nodeVersion}.tar.gz`;
          const tarFolder = `${assetDir}/${syntestType}/node/${crashName}`;
          const tarFile = `${assetDir}/${syntestType}/node/${crashName}/${tarName}`;
          execSync(`wget -O ${tarFile}` +
              ` https://nodejs.org/download/release/v${nodeVersion}/${tarName}`);
          execSync(`tar -xf ${tarFile} -C ${tarFolder}`);
        } catch (e) {
          // console.log(e);
        }
      }
      return crash;
    });

    // return crashes.filter(crash => crash.crashId === 'express-1-13');
    if (syntestCrash) {
      return crashes.filter(crash => syntestCrash.includes(crash.crashId));
    }
    return crashes;
  }

  /**
   * Generate package.json for a crash.
   * @param {Crash} crash the crash to generate a package.json for.
   * @private
   */
  generatePackage(crash: Crash) {
    const pkg: PackageFormat = {
      name: crash.crashId,
      version: '1.0.0',
      description: crash.title,
      main: 'index.js',
      engineStrict: false, // crash.nodeVersion ? true : false,
      scripts: {
        test: 'echo "Error: no test specified" && exit 1',
        crash: 'node index.js',
      },
      author: 'Philip Oliver',
      license: 'ISC',
      dependencies: {
        ...crash.dependencies,
      },
    };
    if (crash.nodeVersion) {
      pkg.engines = {node: crash.nodeVersion};
    }
    crash.package = pkg;
  }

  /**
   * Generate Dockerfile for a crash.
   * @param {Crash} crash the crash to generate a Dockerfile for.
   * @private
   */
  generateDockerfile(crash: Crash) {
    const dockerfileString = `FROM node:${crash.nodeVersion ?? 'latest'} \n` +
        `ARG CACHEBUST=1 \n` +
        `COPY benchmark/crashes/${crash.seeded ? 'seeded/' : ''}${crash.project}/${crash.crashId}/* ` +
        `/${crash.crashId}/ \n` +
        `COPY src/crash-reproduction/containerInternals/readFunctions.mjs /${crash.crashId}/readFunctions.mjs \n` +
        `RUN ls ${crash.crashId} \n` +
        `WORKDIR /${crash.crashId}/ \n` +
        `VOLUME /${crash.crashId} \n` +
        `RUN ["npm", "i"] \n` +
        (crash.setup?.copy ? `RUN cp ${crash.setup?.copy?.from} ${crash.setup?.copy?.to} \n` : '') +
        `RUN ["node", "readFunctions.mjs"] \n` +
        `ENTRYPOINT ["npm", "run", "crash"]`;
    crash.dockerfile = dockerfileString;
  }
}
