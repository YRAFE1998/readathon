import { axiosInstance } from "./axiosInstance"

export const getTeacherDashboardApi = () => {
    return axiosInstance.get(`/api/teacher/get/campaignDashboard`);
}
export const getTeacherDashboardApiForSingleCampaign = (id: string) => {
    return axiosInstance.get(`/api/teacher/get/mycampaignDashboard/${id}`);
}

export const getTeacherReport = (id: string) => {
    return axiosInstance.get(`/api/organization/getTeachers/campaign/${id}`)
}

export const getStudentReport = (id: string) => {
    return axiosInstance.get(`/api/organization/getStudents/campaign/${id}`)
}


export const getSupporterReport = (id: string) => {
    return axiosInstance.get(`/api/organization/get/campaignSupporters/${id}`)
}