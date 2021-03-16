import { axiosInstance } from "./axiosInstance"

export const addCampaignApi = (data: any) => {
    return axiosInstance.post("/api/add/campaign", data);
}
export const allCampaignApi = (role: string) => {
    if (role == "teacherContent.") {
        return axiosInstance.get("/api/teacher/get/allMyCampaigns")
    } else {
        return axiosInstance.get("/api/get/all/campaigns");
    }
}
export const updateCampaignApi = (data: any) => {
    return axiosInstance.put(`/api/update/campaign/${data.Id}`, data);
}
export const deleteCampaingApi = (id: string) => {
    return axiosInstance.delete(`/api/delete/campaign/${id}`);
}
export const getAllCampaingStudentsApi = (id: string, role: string) => {
    if (role == "teacherContent.") {
        return axiosInstance.get(`/api/teacher/myCampaign/${id}`)
    } else {
        return axiosInstance.get(`/api/get/campaign/students/${id}`)
    }
}
export const deleteCampaingStudentsApi = (id: string, data: any) => {
    return axiosInstance.put(`/api/delete/campaign/students/${id}`, data)
}
export const getStudentProgressApi = (id: string, studentId: string, role: string) => {
    if (role == "teacherContent.") {
        return axiosInstance.get(`/api/teacher/get/studentAchievement/${id}/${studentId}`)
    } else {
        return axiosInstance.get(`/api/organization/get/studentAchievement/${id}/${studentId}`)
    }

}
export const addStudentLogApi = (id: string, studentId: string, data: any, type?: string) => {
    return axiosInstance.post(`/api/teacher/addAchievement/${id}/${studentId}`, data);
}
export const deleteStudentLogApi = (id: string, studentId: string) => {
    return axiosInstance.delete(`/api/teacher/delete/studentFromCam/${id}/${studentId}`)
}
