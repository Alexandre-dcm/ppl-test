import { PatientsRegister } from "../types/patientsRegister";
import { DrugsHandler } from "../services/drugsHandler";
import {consts} from '../consts/consts'

// This formats the input coming from the server to a proper PatientsRegister 
export function formatPatientsInput(patientTypes: Array<string>): PatientsRegister {
    const register = {} as PatientsRegister;

    // Initializing an empty Patients register with all values to 0
    for (const [name, shortName] of Object.entries(consts.states)) {
        register[shortName] = 0;
    }
    
    patientTypes.forEach(type => {
        if (!register[type]) {
            register[type] = 1;
        } else {
            register[type]++;
        }
    })
 
    return register;
}