import { PatientsRegister } from '../types/patientsRegister';
export declare class Quarantine {
    patients: PatientsRegister;
    private drugs;
    constructor(patients: PatientsRegister);
    setDrugs(drugs: Array<string>): void;
    wait40Days(): void;
    report(): PatientsRegister;
}
