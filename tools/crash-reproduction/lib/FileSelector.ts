import {FileSelector as CoreFileSelector} from "@syntest/base-language";
import {Crash} from "@syntest/crash-reproduction-setup";
import {JavaScriptArguments} from "./CrashLauncher";

export class FileSelector extends CoreFileSelector {
    loadCrashFilePaths(exclude: string[], crash: Crash, arguments_: JavaScriptArguments): Set<string> {
        const include: string[] = [];// [`./benchmark/crashes/${arguments_.syntestType}/${crash.project}/${crash.crashId}/**/*.js`];
        for (const frame of crash.stackTrace.trace) {
            if (frame.file.includes('.js')) {
                const crashFile = `./benchmark/crashes/${arguments_.syntestType}/${crash.project}/${crash.crashId}/**/${frame.file}`;
                include.push(crashFile);
            }
        }

        return this.loadFilePaths(include, exclude);

    }
}
