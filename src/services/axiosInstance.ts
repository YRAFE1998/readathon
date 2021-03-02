import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AxiosResponse } from "axios";
import { showToast } from "../HOCS/alert";
import { showLoaderReq } from "../HOCS/loader";



export var axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    // headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use((req: AxiosRequestConfig) => {
    showLoaderReq(true)
    return req;
})

axiosInstance.interceptors.response.use((resp: AxiosResponse) => {
    showToast({ color: "#155724", header: "Success", message: "", open: true })
    showLoaderReq(false)

    return resp;

}, (error: AxiosError) => {
    console.log(error.response);
    showToast({ color: "#f55b6f", header: "Error", message: error.response?.data.data || error.response?.data.message, open: true })
    showLoaderReq(false)

    return Promise.reject(error);
})

