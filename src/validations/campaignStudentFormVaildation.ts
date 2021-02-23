import { CampaignStudentInterface } from "../interfaces/campaignStudentInterface";
export const campaignStudentValidation = (state: (keyof CampaignStudentInterface) , placeholder: string, value: string) => {

    if (state == 'studentName' && !value) {
        return "Student Name Required"
    }

    return ""
}

export const campaignStudentValiadtionForm = (value: CampaignStudentInterface) => {
    const data = {} as CampaignStudentInterface
    if (!value.studentName) {
        data.studentName = "Student Name Required"
    }
    if (!value.studentId) {
        data.studentName = "Student Name Required"
    }
      const valid = data.studentName || data.studentId ? false : true;
    
    return { valid: valid, ...data };
}