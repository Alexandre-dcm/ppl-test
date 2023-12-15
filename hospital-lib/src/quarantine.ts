import {PatientsRegister} from './patientsRegister';

export class Quarantine {
    private patients: PatientsRegister;
    private drugs: Array<string> = [];
    private static drugsMap = {
        Aspirin: "As",
        Antibiotic: "An",
        Insulin: "I",
        Paracetamol: "P"
    };

    
    private static patientStates = {
        Fever: "F",
        Healthy: "H",
        Diabetes: "D",
        Tuberculosis: "T",
        Dead: "D"
    }

    constructor(patients: PatientsRegister) {
        this.patients = patients;
        this.drugs = [];
    }

    public setDrugs(drugs: Array<string>): void {
        this.drugs = drugs;
    }

    public wait40Days(): void {
        // this.drugs.forEach()

    }

    public report(): PatientsRegister {

    }

        // Aspirin cures Fever;
        // ● Antibiotic cures Tuberculosis; OK
        // ● A sick patient not receiving the right medicines remains sick, if not explicitly
        // mentioned otherwise;
        // ● Insulin prevents diabetic subject from dying, does not cure Diabetes; OK
        // ● If insulin is mixed with antibiotic, healthy people catch Fever; OK
        // ● Paracetamol cures Fever; OK
        // ● Paracetamol kills subject if mixed with aspirin.
        // diabetics die without insulin OK

        // During one simulation a patient can change his state only once (only one rule can be applied).
        // Rules causing Death take precedence over others.

        // TODO Verifier que une drogue qui interagit avec une autre n'ait pas deja changé le state d'un patient avant de rechanger son state.
        // Les faire agir en premier

        // Checker les mauvais melanges en premier. Tous les tuer ou les rendre fievreux puis return la function ?

        // Exemple : drugs :Insuline, Antibio, aspirine. patients : tuberculeux, healthy = Tous les healthy en fever et tous les tuberculeux soignés. 
        // Mais aspirine doit pas soigner les fever créés par le mauvais melange de insuline et antibio.

    private aspirin() {
        for (const [state, number] of Object.entries(this.patients)) {
            if (state === Quarantine.patientStates.Fever) {
                this.switchState(Quarantine.patientStates.Fever, Quarantine.patientStates.Healthy);
            } 
        }
    }

    private antibiotic() {
        for (const [state, number] of Object.entries(this.patients)) {
            if (state === Quarantine.patientStates.Tuberculosis) {
                this.switchState(Quarantine.patientStates.Tuberculosis, Quarantine.patientStates.Healthy);
            } 
            
            if (this.drugs.includes(Quarantine.drugsMap.Insulin) && state === Quarantine.patientStates.Healthy && this.patients[Quarantine.patientStates.Healthy] !== 0) {
                this.patients[Quarantine.patientStates.Healthy]--;
                this.patients[Quarantine.patientStates.Fever]++;
            }
        }
    }


    private paracetamol() {
        for (const [state, number] of Object.entries(this.patients)) {
            if (state === Quarantine.patientStates.Fever) {
                this.switchState(Quarantine.patientStates.Fever, Quarantine.patientStates.Healthy);
            } 
        }
    }

    // Will be called if no treatment is administrated or if certain types of disease don't receive their associated cure.
    private noTreatMent() {
        // Diabetic patients die if no insuline is given
        if (this.patients[Quarantine.patientStates.Diabetes] !== 0 && !this.drugs.includes(Quarantine.drugsMap.Insulin)) {
            this.switchState(Quarantine.patientStates.Diabetes, Quarantine.patientStates.Dead);
        }
    }

    private switchState(oldState: string, newState: string): void {
        if (this.patients[oldState] !== 0) {
            this.patients[newState] += this.patients[oldState];
            this.patients[oldState] = 0;
        }
    }
}
