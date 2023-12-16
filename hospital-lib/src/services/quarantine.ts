import {PatientsRegister} from '../types/patientsRegister';
import {DrugsHandler} from './drugsHandler';

export class Quarantine {
    public patients: PatientsRegister;
    private drugs: Array<string> = [];

    constructor(patients: PatientsRegister) {
        this.patients = patients;
        this.drugs = [];
    }

    public setDrugs(drugs: Array<string>): void {
        this.drugs = drugs;
    }

    public wait40Days(): void {
        const drugsHandler: DrugsHandler = new DrugsHandler(this.drugs, this.patients);
        this.patients = drugsHandler.applyEffects();
    }

    public report(): PatientsRegister {
        return this.patients;
    }
}
