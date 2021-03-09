import { axiosInstance } from "./axiosInstance"

export const addCampaignApi = (data: any) => {
return axiosInstance.post("/api/add/campaign", data);
}
export const allCampaignApi = () => {
    return axiosInstance.get("/api/get/all/campaigns");
}
export const updateCampaignApi = (data: any) => {
return axiosInstance.put(`/api/update/campaign/${data.Id}`, data);
}
export const deleteCampaingApi = (id: string) => {
    return axiosInstance.delete(`/api/delete/campaign/${id}`);
}
export const getAllCampaingStudentsApi = (id: string) => {
return axiosInstance.get(`/api/get/campaign/students/${id}`)
}
export const deleteCampaingStudentsApi = (id: string, data: any) => {
    return axiosInstance.put(`/api/delete/campaign/students/${id}`, data)
    }