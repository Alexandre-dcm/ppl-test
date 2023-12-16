import {Expect, Setup, Test, TestFixture} from 'alsatian';
import {Quarantine} from '../services/quarantine';
import {formatPatientsInput} from "../utils/formatInput";

@TestFixture()
export class FormatInputTest {

  private input: Array<string>;

  @Setup
  public setup() {
    this.input = ['F', 'F', "H", "D", "D", "T"];
  }

  @Test()
  public formatInputTest(): void {
    const formattedRegister = formatPatientsInput(this.input);

    Expect(formattedRegister).toEqual({F:2,H:1,D:2,T:1});
  }
}