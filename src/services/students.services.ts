import { StudentForm } from "../interfaces/studentForm";
import { TeacherForm } from "../interfaces/teacherForm";
import { axiosInstance } from "./axiosInstance";
export const getAllStudents = (role: string) => {
    if (role == "teacherContent.") {
        return axiosInstance.get("/api/teacher/get/allMystudents")
    } else {
        return axiosInstance.get("/api/get/all/student");
    }
}
export const addStudent = (data: StudentForm) => {
    var retrievedUser = JSON.parse(localStorage.getItem('user') || '{}');
    data.status = "Active";
    if (retrievedUser.content == "teacherContent.") {
        data.teacher_id = retrievedUser.Id;
        return axiosInstance.post("/api/teacher/update/student", data);

    } else {
        return axiosInstance.post("/api/add/student", data);

    }

}
export const updateStudent = (data: StudentForm) => {
    var retrievedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (retrievedUser.content == "teacherContent.") {
        return axiosInstance.put(`/api/teacher/update/student/${data.Id}`, data);

    } else {
        return axiosInstance.put(`/api/update/student/${data.Id}`, data)

    }
}
export const updateStudentPassword = (data: any) => {
    var retrievedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (retrievedUser.content == "teacherContent.") {
        return axiosInstance.put(`/api/teacher/delete/myStudent/${data.Id}`, data)
    } else {
        return axiosInstance.put(`/api/update/studentPassword/${data.Id}`, data)

    }
}
export const deleteStudent = (data: any) => {
    var retrievedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (retrievedUser.content == "teacherContent.") {
        return axiosInstance.put(`/api/teacher/delete/myStudent/${data}`, data)

    } else {
        return axiosInstance.put(`/api/delete/student`, data)

    }
}
export const assignStudentsToTeacher = (data: any) => {
    return axiosInstance.put(`/api/assign/student`, data)
}
