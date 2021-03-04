import { StudentForm } from "../interfaces/studentForm";
import { TeacherForm } from "../interfaces/teacherForm";
import { axiosInstance } from "./axiosInstance";
export const getAllStudents = () => {
    return axiosInstance.get("/api/get/all/student");
}
export const addStudent = (data: StudentForm) => {
    data.status = "Active";
    return axiosInstance.post("/api/add/student", data);
}
export const updateStudent = (data: StudentForm) => {
    return axiosInstance.put(`/api/update/student/${data.Id}`, data)
}
export const updateStudentPassword = (data: any) => {
    return axiosInstance.put(`/api/update/studentPassword/${data.id}`, data)
}
export const deleteStudent = (data: any) => {
return axiosInstance.put(`/api/delete/student`, data)
}
export const assignStudentsToTeacher = (data: any) => {
    return axiosInstance.put(`/api/assign/student`, data)
}
