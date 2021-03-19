import moment from "moment"

export const arrangeCampaginFeilds = (data: any) => {
    return data.map((v: any) => v = {
        Id: v.Id,
        organization_id: v.organization_id,
        question: v.question,
        campaignTitle: v.title,
        startDate: moment(v.startDate).format("YYYY-MM-DD"),
        endDate: moment(v.endDate).format("YYYY-MM-DD"),
        targetAchievement: v.targetAchievement,
        actualAchievement: v.actualAchievement,
        targetDonation: v.targetDonation,
        collectedDonations: "",
        targetUnits: v.targetAchievement,
        actualUnits: v.actualAchievement,
        campaignType: v.theType,
        status: v.status,
        theType: v.theType,
        title: v.title,
    })
}

export const arrangeCampaginStudentsFeilds = (data: any, teachers: any[]) => {
    return  data.map((v: any) => v = {
        Id: v?.Id,
        firstName: v?.fname,
        lastName: v?.lname,
        fname: v?.fname,
        lname: v?.lname,
        email: v?.email,
        teacher: teachers?.filter((ele) => ele.Id == v?.teacher_id)?.[0]?.fname || "",
        moneyRaised: v?.campaignstudents?.moneyRaised,
        achievement: v?.campaignstudents?.targetAchievement,
        compaignStudentId: v?.campaignstudents?.Id,
        campaignId: v?.campaignstudents?.campaignId,
        
        teacher_id: v?.teacher_id,

    })

}