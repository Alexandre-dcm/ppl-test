import { PatientsRegister } from "./patientsRegister";

export function formatPatientsInput(patientTypes: Array<string>): PatientsRegister {
    const register = {} as PatientsRegister;
    
    patientTypes.forEach(type => {        
        if (register[type] === 1) {
            register[type]++;
        } else {
            register[type] = 1;
        }        
    })
 
    return register;
}