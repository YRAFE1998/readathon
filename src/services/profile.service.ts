import { axiosInstance } from "./axiosInstance";
export const updateProfileOrganization = (data: any) => {
   
    const dataAppend = new FormData();
    Object.keys(data).map((v: any) => dataAppend.append(v, data[v]))
    return axiosInstance.put("/api/editprofile/organization", dataAppend);
}