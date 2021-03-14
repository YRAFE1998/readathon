import { LogAchivementInterface } from "../interfaces/logAchivementsInterface";
export const logAchivementValidation = (state: (keyof LogAchivementInterface) , placeholder: string, value: string) => {

    if (state == 'achievement' && !value) {
        return "Achivement Required"
    }
    if (state == 'date' && !value) {
        return "Date Required"
    }
    if (state == 'description' && !value) {
        return "Description Required"
    }

    return ""
}

export const logAchivementValiadtionForm = (value: LogAchivementInterface) => {
    const data = {} as LogAchivementInterface
    if (!value.achievement) {
        data.achievement = "Achivement Required"
    }
    if (!value.date) {
        data.date = "Date Required"
    }
    if (!value.type) {
        data.type = "Description Required"

    }
     
    const valid = data.achievement || data.date || data.description ? false : true;
    
    return { valid: valid, ...data };
}