import { CampaignInterface } from "../interfaces/compiagnInterface";
export const campaignValidation = (state: (keyof CampaignInterface) , placeholder: string, value: string) => {

    if (state == 'campaignTitle' && !value) {
        return "Campaign Title Required"
    }

    if (state == 'campaignUnit' && !value) {
        return "Campaign Unit Required"
    }
    
    if (state == 'campaignType' && !value) {
        return "Campaign Type Required"
    }
    
    if (state == 'startDate' && !value) {
        return "Start Date Required"
    }
    
    if (state == 'endDate' && !value) {
        return "End Date Required"
    }
    
    if (state == 'moneyRaised' && !value) {
        return "Money Raised Required"
    }
    
    if (state == 'donationTarget' && !value) {
        return "Donation Target Required"
    }
    
    if (state == 'targetUnit' && !value) {
        return "Target Unit Required"
    }
    
    return ""
}

export const campaignValiadtionForm = (value: CampaignInterface) => {
    const data = {} as CampaignInterface
    if (!value.campaignTitle) {
        data.campaignTitle = "Campaign Title Required"
    }
    if (!value.campaignUnit) {
        data.campaignUnit = "Campaign Unite Required"
    }
    if (!value.campaignType) {
        data.campaignType = "Campaign Type Required"
    }
    if (!value.startDate) {
        data.startDate = "Start Date Required"
    }
    if (!value.endDate) {
        data.endDate = "End Date Required"
    }
    if (!value.moneyRaised) {
        data.moneyRaised = "Money Raised Required"
    }
    if (!value.donationTarget) {
        data.donationTarget = "Donation Target Required"
    }
    if (!value.targetUnit) {
        data.targetUnit = "Target Unit Required"
    }
    const valid = data.campaignTitle || data.campaignType || data.campaignUnit || data.donationTarget || data.endDate || data.moneyRaised || data.startDate || data.targetUnit ? false : true;
    
    return { valid: valid, ...data };
}