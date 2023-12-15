import {PatientsRegister} from './patientsRegister';

export class Quarantine {

    constructor(patients: PatientsRegister) {
        this.patients = patients;
    }

    public setDrugs(drugs: Array<string>): void {
        
    }

    public wait40Days(): void {

    }

    public report(): PatientsRegister {

    }
}
