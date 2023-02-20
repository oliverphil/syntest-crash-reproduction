import {StackTrace} from './stackTraceTypes';

export interface Project {
    projectName: string;
    crashes: Crash[];
}

export interface Crash {
    crashId: string;
    project: string;
    issueNumber: number;
    title: string;
    url: string;
    version: string;
    nodeVersion?: string;
    dependencies: {
        [dependencyName: string]: string;
    };
    stackTrace: StackTrace;
    package?: PackageFormat;
    dockerfile?: string;
    seeded?: boolean;
    requireCrashDependency?: boolean;
    setup?: {
        copy?: {
            from: string;
            to: string;
        },
        download?: {
            url: string;
            unpack: "tar.gz";
        },
        npmGlobal?: {
            [dependencyName: string]: string;
        }
    };
}

export interface PackageFormat {
    name: string;
    version: '1.0.0';
    description: string;
    main: 'index.js';
    engineStrict: boolean;
    engines?: {
        node: string
    };
    scripts: {
        test: 'echo "Error: no test specified" && exit 1';
        crash: string;
    };
    author: string;
    license: 'ISC';
    dependencies: {
        [dependencyName: string]: string;
    };
    type?: string;
}
