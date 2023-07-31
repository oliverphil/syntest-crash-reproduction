export interface StackFrame {
  method?: string;
  file: string;
  lineNumber?: number;
  charNumber?: number;
  isModule: boolean;
  isEmbeddedOrAnonymous: boolean;
  internal?: boolean;
  dependency?: string;
}

export interface StackTrace {
  error: StackError
  trace: StackFrame[];
  rawTrace: string;
}

export interface StackError {
  errorType: string;
  errorMessage: string;
}

export interface RunResult {
  file: string;
  stackTrace: StackTrace;
}
