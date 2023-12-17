import { PatientsRegister } from '../types/patientsRegister';
export declare class DrugsHandler {
    private drugs;
    private patientsRegister;
    private oldPatientsRegister;
    static drugsMap: {
        Aspirin: string;
        Antibiotic: string;
        Insulin: string;
        Paracetamol: string;
    };
    static states: {
        Fever: string;
        Healthy: string;
        Diabetes: string;
        Tuberculosis: string;
        Dead: string;
    };
    private badMixes;
    constructor(drugs: Array<string>, patients: PatientsRegister);
    applyEffects(): PatientsRegister;
    /** Drugs */
    private antibiotic;
    private aspirin;
    private paracetamol;
    private checkInsulin;
    /** Bad mixes */
    private checkBadMixes;
    private insulinAndAntibiotic;
    private paracetamolAndAspirin;
    /** Others */
    private switchState;
}
