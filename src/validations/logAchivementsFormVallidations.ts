import { LogAchivementInterface } from "../interfaces/logAchivementsInterface";
export const logAchivementValidation = (state: (keyof LogAchivementInterface) , placeholder: string, value: string) => {

    if (state == 'achivement' && !value) {
        return "Achivement Required"
    }
    if (state == 'date' && !value) {
        return "Date Required"
    }
    if (state == 'desc' && !value) {
        return "Description Required"
    }

    return ""
}

export const logAchivementValiadtionForm = (value: LogAchivementInterface) => {
    const data = {} as LogAchivementInterface
    if (!value.achivement) {
        data.achivement = "Achivement Required"
    }
    if (!value.date) {
        data.date = "Date Required"
    }
    if (!value.desc) {
        data.desc = "Description Required"

    }
     
    const valid = data.achivement || data.date || data.desc ? false : true;
    
    return { valid: valid, ...data };
}