import {SecondaryObjectiveComparator} from '@syntest/search/dist/lib/objective/secondary/SecondaryObjectiveComparator';
import {JavaScriptTestCase} from '../../testcase/JavaScriptTestCase';


/**
 * Secondary objective that is based on wether the encoding introduces an error .
 */
export class CrashFitnessFunction1<T extends JavaScriptTestCase>
  implements SecondaryObjectiveComparator<T>
{
  /**
   * @inheritDoc
   */
  public compare(a: JavaScriptTestCase, b: JavaScriptTestCase): number {
    if (!a.getExecutionResult() || !b.getExecutionResult()) {
      // one or both of the encodings do not have an execution result
      return 0;
    }

    if (
      a.getExecutionResult().hasError() &&
      b.getExecutionResult().hasError()
    ) {
      return 0; // both throw an error
    } else if (a.getExecutionResult().hasError()) {
      return -1; // a throws an error but b does not so b is better
    } else if (b.getExecutionResult().hasError()) {
      return 1; // b throws an error but a does not so a is better
    }

    // neither throws an error
    return 0;
  }
}
