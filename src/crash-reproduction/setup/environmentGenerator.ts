import * as fs from 'fs';
import {Crash, Project, PackageFormat} from '../types/importTypes';
import {
  concatAll, filter,
  from, merge,
  Observable,
  of, skipWhile,
  switchMap, tap,
} from 'rxjs';
import StackTraceProcessor from './preprocessing/stackTraceProcessor';

/**
 * Generate environments for each crash to be reproduced
 * Environments include a package.json and Dockerfile for each crash
 */
class EnvironmentGenerator {
  private projects: Project[] = [];

  /**
   * Generate the environments for each crash
   * @return {Crash[]} the crashes
   */
  public async generate(): Promise<Crash[]> {
    const crashes: Crash[] = [];
    await this.loadAssets().forEach((crash) => {
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
  loadAssets(): Observable<Crash> {
    console.log('Loading Crashes... ');
    const assetDir = './benchmark/crashes';
    const standardCrashes = from(fs.promises.readdir(assetDir)).pipe(
        concatAll(),
        filter((value) => value !== '.gitignore' && value !== 'seeded'),
        switchMap((projItem) => {
          const projectName = projItem;
          return of([projectName,
            fs.readdirSync(`${assetDir}/${projectName}`)]);
        }),
        switchMap((value) => {
          // console.log(value);
          const projectsArray: string[][] = [];
          (value[1] as string[]).forEach((p) => {
            projectsArray.push([value[0] as string, p]);
          });
          return projectsArray;
        }),
        switchMap((crashFileItem) => {
          const projectName = crashFileItem[0];
          const crashName = crashFileItem[1];
          const crashFileString = `${assetDir}/` +
              `${projectName}/${crashName}/${crashName}`;
          return of([
            projectName,
            crashName,
            fs.readFileSync(`${crashFileString}.json`),
            fs.readFileSync(`${crashFileString}.log`),
          ]);
        }),
        switchMap((value) => {
          const projectName = value[0];
          const crashName = value[1];
          const crashFile = value[2];
          const logFile = value[3];
          console.log(crashName);
          const crash: Crash = {
            project: projectName,
            stackTrace: StackTraceProcessor.process(logFile.toString()),
            ...JSON.parse(crashFile.toString()),
            crashId: crashName,
          };
          if (crash.version && crash.project !== 'node') {
            crash.dependencies[crash.project] = crash.version;
          }
          return of(crash);
        }),
    );
    const seededCrashes = from(fs.promises.readdir(`${assetDir}/seeded`)).pipe(
        concatAll(),
        skipWhile((folder) => folder === 'http-server'),
        switchMap((projItem) => {
          const projectName = projItem;
          return of([projectName,
            fs.readdirSync(`${assetDir}/seeded/${projectName}`)]);
        }),
        switchMap((value) => {
          // console.log(value);
          const projectsArray: string[][] = [];
          (value[1] as string[]).forEach((p) => {
            projectsArray.push([value[0] as string, p]);
          });
          return projectsArray;
        }),
        switchMap((crashFileItem) => {
          const projectName = crashFileItem[0];
          const crashName = crashFileItem[1];
          const crashFileString = `${assetDir}/seeded/` +
              `${projectName}/${crashName}/${crashName}`;
          return of([
            projectName,
            crashName,
            fs.readFileSync(`${crashFileString}.json`),
            fs.readFileSync(`${crashFileString}.log`),
          ]);
        }),
        switchMap((value) => {
          const projectName = value[0];
          const crashName = value[1];
          const crashFile = value[2];
          const logFile = value[3];
          console.log(crashName);
          const crash: Crash = {
            project: projectName,
            stackTrace: StackTraceProcessor.process(logFile.toString()),
            ...JSON.parse(crashFile.toString()),
            crashId: crashName,
            seeded: true,
          };
          if (crash.version && crash.project !== 'node' && !crash.seeded) {
            crash.dependencies[crash.project] = crash.version;
          }
          return of(crash);
        }),
    );
    return merge(standardCrashes, seededCrashes);
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
      engineStrict: crash.nodeVersion ? true : false,
      scripts: {
        test: 'echo "Error: no test specified" && exit 1',
        crash: 'node src/index.js',
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
        `COPY assets/${crash.seeded ? 'seeded/' : ''}${crash.project}/${crash.crashId}/* ` +
        `/${crash.crashId}/ \n` +
        `COPY src/containerInternals/readFunctions.mjs /${crash.crashId}/readFunctions.mjs \n` +
        `WORKDIR /${crash.crashId}/ \n` +
        `RUN ["npm", "i"] \n` +
        (crash.setup?.copy ? `RUN cp ${crash.setup?.copy?.from} ${crash.setup?.copy?.to} \n` : '') +
        `RUN ["node", "readFunctions.mjs"] \n` +
        `VOLUME /${crash.crashId}/src \n` +
        `ENTRYPOINT ["npm", "run", "crash"]`;
    crash.dockerfile = dockerfileString;
  }
}

export default EnvironmentGenerator;
