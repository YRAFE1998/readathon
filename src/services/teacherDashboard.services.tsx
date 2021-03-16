import { axiosInstance } from "./axiosInstance"

export const  getTeacherDashboardApi = () => {
    return axiosInstance.get(`/api/teacher/get/campaignDashboard`);
}
export const  getTeacherDashboardApiForSingleCampaign = (id: string) => {
    return axiosInstance.get(`/api/teacher/get/mycampaignDashboard/${id}`);
}
