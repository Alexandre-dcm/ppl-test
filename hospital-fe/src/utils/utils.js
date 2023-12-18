import { consts } from 'hospital-lib'

export const processPatientsData = (patients) => {
  const result = []

  for (const [state, number] of Object.entries(patients)) {
    let line = ''

    for (const [name, shortName] of Object.entries(consts.states)) {
      if (shortName === state) {
        line = `${name} : ${number}`
      }
    }

    result.push(line)
  }

  return result
}

export const processDrugsData = (drugs) => {
  const result = []

  for (const drug of drugs) {
    let line = ''

    for (const [name, shortName] of Object.entries(consts.drugs)) {
      if (shortName === drug) {
        line = `${name}`
      }
    }

    result.push(line)
  }

  return result
}
