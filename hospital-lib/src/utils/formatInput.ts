import { PatientsRegister } from "../types/patientsRegister";

export function formatPatientsInput(patientTypes: Array<string>): PatientsRegister {
    const register = {} as PatientsRegister;
    
    patientTypes.forEach(type => {
        if (!register[type]) {
            register[type] = 1;
        } else {
            register[type]++;
        }
    })
 
    return register;
}