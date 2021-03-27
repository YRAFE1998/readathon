import { axiosInstance } from "./axiosInstance"

export const  getOrginaztionDashboardApi = () => {
    return axiosInstance.get(`/api/organization/get/campaign`);
}
export const  getOrginaztionDashboardApiForSingleCampaign = (id: string) => {
    return axiosInstance.get(`/api/organization/get/campaign//${id}`);
}
