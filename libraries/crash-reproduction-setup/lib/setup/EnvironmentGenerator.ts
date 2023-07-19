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
    this.loadAssets(undefined, undefined, true).forEach((crash) => {
      this.generatePackage(crash);
      this.generateDockerfile(crash);
      crashes.push(crash);
    });
    return crashes;
  }

  /**
   * Load crash information from json files
   * @private
   * @return {Observable<Crash>} an observable to provide crashes
   */
  loadAssets(project: string | undefined, syntestCrashes: boolean | undefined, syntestSeeded: boolean): Crash[] {
    console.log('Loading Crashes... ');
    const assetDir = './benchmark/crashes';
    const assetDirContents = fs.readdirSync(assetDir).filter((value) => value !== '.gitignore'
        && value !== 'seeded' && (!project || value === project) && !syntestSeeded);
    const seededAssetDirContents = fs.readdirSync(`${assetDir}/seeded`).filter((value) =>
        value !== 'http-server' && value !== '' && (!project || value.startsWith(project)) && syntestSeeded);
    const assetSubDirs = assetDirContents.map((projItem) => {
      return [projItem, fs.readdirSync(`${assetDir}/${projItem}`), false];
    }).filter((projItem) => {
      if (syntestCrashes !== undefined) {
        projItem[1] = (<string[]> projItem[1]).filter(crash => {
          const split = crash.split('-');
          if (Number.isNaN(Number.parseInt(split[split.length - 1])) ||
              Number.isNaN(Number.parseInt(split[split.length - 2]))
          ) {
            return !syntestCrashes;
          }
          return syntestCrashes;
        })
      }
      return true;
    });
    const seededAssetSubDirs = seededAssetDirContents.map((projItem) => {
      const projectName = projItem;
      return [projectName, fs.readdirSync(`${assetDir}/seeded/${projectName}`), true];
    });
    assetSubDirs.push(...seededAssetSubDirs);
    assetSubDirs.reverse();
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
    })
    const crashes = crashInfo.filter(crash => !['atom-22772', 'webpack-9114'].includes(crash[1])).map((value) => {
      const projectName = value[0];
      const crashName = value[1];
      const crashFile = value[2];
      const logFile = value[3];
      console.log(crashName);
      const crash: Crash = {
        project: projectName,
        stackTrace: StackTraceProcessor.process(logFile.toString(), true),
        ...JSON.parse(crashFile.toString()),
        crashId: crashName,
        seeded: value[4]
      };
      if (crash.requireCrashDependency) {
        crash.dependencies[crash.project] = crash.version;
      }
      if (crash.project === 'node') {
        try {
          const nodeVersion = crash.nodeVersion || crash.version;
          const tarName = `node-v${nodeVersion}.tar.gz`;
          const tarFolder = `${assetDir}/${crash.seeded ? `seeded/${projectName}` : projectName}/${crashName}`;
          const tarFile = `${assetDir}/${crash.seeded ? `seeded/${projectName}` : projectName}/${crashName}/${tarName}`;
          execSync(`wget -O ${tarFile}` +
              ` https://nodejs.org/dist/v${nodeVersion}/${tarName}`);
          execSync(`tar -xf ${tarFile} -C ${tarFolder}`);
        } catch (e) {
          console.log(e);
        }
      }
      return crash;
    });

    // return crashes.filter(crash => crash.crashId === 'atom-22894-2');
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
