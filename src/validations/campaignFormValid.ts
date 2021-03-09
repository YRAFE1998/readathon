import { CampaignInterface } from "../interfaces/compiagnInterface";
export const campaignValidation = (state: (keyof CampaignInterface) , placeholder: string, value: string) => {

    if (state == 'title' && !value) {
        return "Campaign Title Required"
    }
    if (state == 'theType' && !value) {
        return "Campaign Type Required"
    }

    if (state == 'startDate' && !value) {
        return "Start Date Required"
    }
    
    if (state == 'endDate' && !value) {
        return "End Date Required"
    }
    
    if (state == 'question' && !value) {
        return "Question Required"
    }
    
    if (state == 'targetDonation' && !value) {
        return "Donation Target Required"
    }
    
    if (state == 'targetAchievement' && !value) {
        return "Target Achievement Required"
    }
    
    return ""
}

export const campaignValiadtionForm = (value: CampaignInterface) => {
    const data = {} as CampaignInterface
    if (!value.title) {
        data.title = "Campaign Title Required"
    }
    
    if (!value.theType) {
        data.theType = "Campaign Type Required"
    }
    if (!value.startDate) {
        data.startDate = "Start Date Required"
    }
    if (!value.endDate) {
        data.endDate = "End Date Required"
    }
    if (!value.question) {
        data.question = "Question Required"
    }
    if (!value.targetDonation) {
        data.targetDonation = "Donation Target Required"
    }
    if (!value.targetAchievement) {
        data.targetAchievement = "Target Achievement Required"
    }
    const valid = data.title || data.theType || data.question || data.targetDonation || data.endDate || data.targetAchievement || data.startDate ? false : true;
    
    return { valid: valid, ...data };
}