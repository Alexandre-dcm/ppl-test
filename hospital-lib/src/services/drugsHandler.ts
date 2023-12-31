import {PatientsRegister} from '../types/patientsRegister';
import {BadMix} from '../types/badMix';
import {consts} from '../consts/consts'

export class DrugsHandler {
    private drugs: Array<string> = [];
    private patientsRegister: PatientsRegister;
    private oldPatientsRegister: PatientsRegister;

    private badMixes: BadMix[] = [
        {
            functionName: 'paracetamolAndAspirin',
            drugs: [consts.drugs.Aspirin, consts.drugs.Paracetamol],
        },
        {
            functionName: 'insulinAndAntibiotic',
            drugs: [consts.drugs.Insulin, consts.drugs.Antibiotic]
        }
    ];

    constructor(drugs: Array<string>, patients: PatientsRegister) {
        this.drugs = drugs;
        this.patientsRegister = patients;
        this.oldPatientsRegister = Object.assign({}, this.patientsRegister); // Keeping a record of base register to avoid multiple change of state later
    }

    public applyEffects(): PatientsRegister { 
        this.checkBadMixes();
        this.checkInsulin();
        
        this.drugs.forEach(drug => {
            // Avoiding a switch with all the drugs names. Iterating over them and calling their corresponding functions.
            for (const [name, shortName] of Object.entries(consts.drugs)) {       
                if (shortName === drug) {
                    const functionToCall = name.toLowerCase() as keyof DrugsHandler;

                    if (typeof this[functionToCall] === 'function') {
                        this[functionToCall]();
                    } 
                }
            }
        })

        return this.patientsRegister;
    }

    /** Drugs */
    private antibiotic(): void {
        this.switchState(consts.states.Tuberculosis, consts.states.Healthy);
    }

    private aspirin(): void {
        this.switchState(consts.states.Fever, consts.states.Healthy);
    }

    private paracetamol(): void {  
        this.switchState(consts.states.Fever, consts.states.Healthy);
    }

    private checkInsulin(): void {
        // Diabetic patients die if no insuline is given
        if (!this.drugs.includes(consts.drugs.Insulin)) {                        
            this.switchState(consts.states.Diabetes, consts.states.Dead);
        }
    }

    /** Bad mixes */
    private checkBadMixes(): void {
        this.badMixes.forEach(badMix => {
            // Checking if there's a bad mix in the administrated drugs 
            const match: Array<string> = this.drugs.filter(element => badMix.drugs.includes(element));
            
            // If found, calling the associated function
            if (match.length === badMix.drugs.length) {
                this[badMix.functionName as keyof DrugsHandler]();
            }
        })
    }

    private insulinAndAntibiotic(): void {
        // Healthy people catch fever
        this.switchState(consts.states.Healthy, consts.states.Fever);
    }

    private paracetamolAndAspirin(): void {
        // Killing everyone :(            
        for (const [state, number] of Object.entries(this.patientsRegister)) {
            this.switchState(state, consts.states.Dead);
        }
    }

    /** Others */
    private switchState(oldState: string, newState: string): void {
        let forceNumber: number;

        if (this.patientsRegister[newState] !== this.oldPatientsRegister[newState]) {
            // This forceNumber corresponds to the number of patients that were already sick and for whom their state hasn't been changed yet. Prevents multiple changes of state for same patient.
            forceNumber = this.oldPatientsRegister[oldState]; 
        }

        if (this.patientsRegister[oldState] !== 0 && oldState !== consts.states.Dead) {    
            const numberOfPatientsToSwitch: number = forceNumber || this.patientsRegister[oldState];

            this.patientsRegister[newState] += numberOfPatientsToSwitch;
            this.patientsRegister[oldState] -= numberOfPatientsToSwitch;
        }        
    }
}