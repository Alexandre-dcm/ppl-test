import {Expect, Setup, Test, TestFixture} from 'alsatian';
import {Quarantine} from '../services/quarantine';
import {formatPatientsInput} from "../utils/formatInput";

@TestFixture()
export class QuarantineTest {

  private quarantine: Quarantine;

  @Setup
  public setup() {
    this.quarantine = new Quarantine({
        F: 1, H: 2, D: 3, T: 1, X: 0
    });
  }



  @Test()
  public beforeTreatment(): void {
    // diabetics die without insulin
    Expect(this.quarantine.report()).toEqual({
      F: 1, H: 2, D: 3, T: 1, X: 0
    });
  }

  @Test()
  public noTreatment(): void {
    this.quarantine.wait40Days();
    // diabetics die without insulin
    Expect(this.quarantine.report()).toEqual({
      F: 1, H: 2, D: 0, T: 1, X: 3
    });
  }

  @Test()
  public aspirin(): void {
    this.quarantine.setDrugs(['As']);
    this.quarantine.wait40Days();
    // aspirin cure Fever
    Expect(this.quarantine.report()).toEqual({
      F: 0, H: 3, D: 0, T: 1, X: 3
    });
  }

  @Test()
  public antibiotic(): void {
    this.quarantine.setDrugs(['An']);
    this.quarantine.wait40Days();
    // antibiotic cure Tuberculosis
    // but healthy people catch Fever if mixed with insulin.
    Expect(this.quarantine.report()).toEqual({
      F: 1, H: 3, D: 0, T: 0, X: 3
    });
  }

  @Test()
  public insulin(): void {
    this.quarantine.setDrugs(['I']);
    this.quarantine.wait40Days();
    // insulin prevent diabetic subject from dying, does not cure Diabetes,
    Expect(this.quarantine.report()).toEqual({
      F: 1, H: 2, D: 3, T: 1, X: 0
    });
  }

  @Test()
  public antibioticPlusInsulin(): void {
    this.quarantine.setDrugs(['An', 'I']);
    this.quarantine.wait40Days();
    // if insulin is mixed with antibiotic, healthy people catch Fever
    Expect(this.quarantine.report()).toEqual({
      F: 3, H: 1, D: 3, T: 0, X: 0
    });
  }

  @Test()
  public paracetamol(): void {
    this.quarantine.setDrugs(['P']);
    this.quarantine.wait40Days();
    // paracetamol heals fever
    Expect(this.quarantine.report()).toEqual({
      F: 0, H: 3, D: 0, T: 1, X: 3
    });
  }

  @Test()
  public paracetamolAndAspirin(): void {
    this.quarantine.setDrugs(['P', 'As']);
    this.quarantine.wait40Days();
    // paracetamol kills subject if mixed with aspirin
    Expect(this.quarantine.report()).toEqual({
      F: 0, H: 0, D: 0, T: 0, X: 7
    });
  }
}