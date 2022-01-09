import {
  PublicVisibility,
  PrivateVisibility,
  TargetMetaData,
} from "@syntest/framework";
import { JavaScriptFunction, ProtectedVisibility } from "./JavaScriptFunction";
import { JavaScriptTargetMetaData } from "../JavaScriptTargetPool";

// TODO check if exported (and how)
export class TargetVisitor {
  private _targetMap: Map<string, TargetMetaData>;
  private _functionMap: Map<string, Map<string, JavaScriptFunction>>;

  constructor() {
    this._targetMap = new Map<string, TargetMetaData>();
    this._functionMap = new Map<string, Map<string, JavaScriptFunction>>();
  }

  public ClassDeclaration: (path) => void = (path) => {
    const targetName = path.node.id.name;

    if (!this._targetMap.has(targetName)) {
      this._targetMap.set(targetName, {
        name: targetName,
      });

      this._functionMap.set(targetName, new Map<string, JavaScriptFunction>());
    }
  };

  public ClassMethod: (path) => void = (path) => {
    const targetName = path.parentPath.parentPath.node.id.name;
    const functionName = path.node.key.name;

    let visibility = PublicVisibility;
    if (path.node.access === "private") {
      visibility = PrivateVisibility;
    } else if (path.node.access === "protected") {
      visibility = ProtectedVisibility;
    }

    this._functionMap.get(targetName).set(functionName, {
      name: functionName,
      type: functionName === "constructor" ? "constructor" : "method",
      visibility: visibility,
      isConstructor: functionName === "constructor",
      parameters: path.node.params.map((x) => {
        return {
          name: x.name,
          type: "any", // TODO unknown because javascript! (check how this looks in typescript)
        };
      }),
      returnParameters: [
        {
          name: "unknown",
          type: "any", // TODO unknown because javascript! (check how this looks in typescript)
        }
        // TODO unknown because javascript! (check how this looks in typescript)
      ],
      isStatic: path.node.static,
      isAsync: path.node.async,
    });
  };

  // classic function declarations
  public FunctionDeclaration: (path) => void = (path) => {
    const targetName = path.node.id.name;
    const functionName = targetName;
    let visibility = PublicVisibility;

    if (!this._targetMap.has(targetName)) {
      this._targetMap.set(targetName, {
        name: targetName,
      });

      this._functionMap.set(targetName, new Map<string, JavaScriptFunction>());
    }

    this._functionMap.get(targetName).set(functionName, {
      name: functionName,
      type: "function",
      visibility: visibility,
      isConstructor: false,
      parameters: path.node.params.map((x) => {
        return {
          name: x.name,
          type: "any", // TODO unknown because javascript! (check how this looks in typescript)
        };
      }),
      returnParameters: [
        {
          name: "unknown",
          type: "any", // TODO unknown because javascript! (check how this looks in typescript)
        }
        // TODO unknown because javascript! (check how this looks in typescript)
      ],
      isStatic: path.node.static,
      isAsync: path.node.async,
    });
  }

  get targetMap(): Map<string, any> {
    return this._targetMap;
  }

  get functionMap(): Map<string, Map<string, any>> {
    return this._functionMap;
  }
}
