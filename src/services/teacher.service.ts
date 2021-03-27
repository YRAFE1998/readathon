import { TeacherForm } from "../interfaces/teacherForm";
import { axiosInstance } from "./axiosInstance";
export const getAllTeachers = () => {
    return axiosInstance.get("/api/get/all/teachers");
}
export const addTeacher = (data: TeacherForm) => {
    data.status = "Active";
    return axiosInstance.post("/api/add/teacher", data);
}
export const updateTeacher = (data: TeacherForm) => {
    return axiosInstance.put(`/api/update/teacher/${data.Id}`, data)
}
export const updateTeacherPassword = (data: any) => {
    return axiosInstance.put(`/api/update/teacherPassword/${data.id}`, data)
}
export const deleteTeacher = (id: string) => {

    return axiosInstance.delete(`/api/delete/teacher/${id}`)
}
export const deleteTeacherWithAssign = (deletedTeacher: string, assignTeacher : any) => {
    return axiosInstance.post(`/api/assignAndDelete/teacher/${deletedTeacher}`, assignTeacher)
}

export const importTeacherApi = (data: any) => {
    return axiosInstance.post(`/api/organization/import/teachers`, data);
}