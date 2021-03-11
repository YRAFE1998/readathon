import moment from "moment";
import { CampaignInterface } from "../interfaces/compiagnInterface";
export const campaignValidation = (state: (keyof CampaignInterface) , placeholder: string, value: string, status: string) => {

    if (state == 'title' && !value) {
        return "Campaign Title Required"
    }
    if (state == 'title' && (value.length < 5  || value.length > 40) ) {
        return "Campaign Title Must length is between 5 and 40"
    }
    if (state == 'theType' && !value) {
        return "Campaign Type Required"
    }

    if (state == 'startDate' && !value) {
        return "Start Date Required"
    }
    if (state == 'startDate' && status == "add"  && moment(value).isBefore(moment())) {
        return "Start Date Must Be Greater Than Today"
    }
      
    if (state == 'endDate' && !value) {
        return "End Date Required"
    }
    if (state == 'endDate' && status == "add"  && moment(value).isBefore(moment())) {
        return "End Date Must Be Greater Than Today"
    }
    
    if (state == 'question' && !value) {
        return "Question Required"
    }
    if (state == 'question' && (value.length < 10  || value.length > 10000)) {
        return "Question Required Enter between 10 and 10000 characters"
    }
    
    if (state == 'targetDonation' && !value) {
        return "Donation Target Required"
    }
    
    if (state == 'targetAchievement' && !value) {
        return "Target Achievement Required"
    }
    
    return ""
}

export const campaignValiadtionForm = (value: CampaignInterface, status: string) => {
    const data = {} as CampaignInterface
    if (!value.title) {
        data.title = "Campaign Title Required"
    }
    if (value.title && (value?.title?.length < 5  || value?.title?.length > 40) ) {
        data.title = "Campaign Title Must length is between 5 and 40";
    }
    
    if (!value.theType) {
        data.theType = "Campaign Type Required"
    }
    if (!value.startDate) {
        data.startDate = "Start Date Required"
    }
    if (value.startDate && status == "add"  && moment(value.startDate).isBefore(moment())) {
        data.startDate = "Start Date Must Be Greater Than Today";

    }
    
    if (!value.endDate) {
        data.endDate = "End Date Required"
    }
    if (value.endDate && status == "add"  && moment(value.endDate).isBefore(moment())) {
        data.endDate = "End Date Must Be Greater Than Today"
    }

    if (value.endDate && moment(value.endDate).isBefore(moment(value.startDate))) {
        data.startDate = "Start Date Must Be Less Than End Date";
        data.endDate = "Start Date Must Be Less Than End Date"

    }

    
    if (!value.question) {
        data.question = "Question Required"
    }
    if (value.question && (value?.question?.length < 10  || value?.question?.length > 10000) ) {
        data.question = "Question Required Enter between 10 and 10000 characters";
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