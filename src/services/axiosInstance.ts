import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AxiosResponse } from "axios";
import { showToast } from "../HOCS/alert";
import { showLoaderReq } from "../HOCS/loader";
import { baseURL } from "../utils/baseUrl";



export var axiosInstance = axios.create({
    baseURL: 'http://40.74.38.157:8080',
    // baseURL: 'http://localhost:8080',
    headers:{'x-access-token' : JSON.parse(localStorage.getItem("user") || '{}')?.accessToken || ""}
    // headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use((req: AxiosRequestConfig) => {
    showLoaderReq(true)
    req.headers = {...req.headers, 'x-access-token' : JSON.parse(localStorage.getItem("user") || '{}')?.accessToken || ""}
    
    return req;
})

axiosInstance.interceptors.response.use((resp: AxiosResponse) => {
    if (resp.config.method !== 'get') {
        showToast({ color: "#155724", header: "Success", message: "", open: true })
    }
    showLoaderReq(false)

    return resp;

}, (error: AxiosError) => {
    if (error.response?.config.method !== 'get') {
        showToast({ color: "#f55b6f", header: "Error", message: error.response?.data.data || error.response?.data?.errorInfo || error.response?.data.message, open: true })
    }
    if (error.response?.status == 401) {
        showToast({ color: "#f55b6f", header: "Error", message: error.response?.data.data || error.response?.data?.errorInfo || error.response?.data.message, open: true })
        localStorage.removeItem("user");
        window.location.href = `${baseURL}/#/auth/login`
    }
    showLoaderReq(false)

    return Promise.reject(error);
})

