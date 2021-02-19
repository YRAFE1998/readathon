import axios, { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { showToast } from "../HOCS/alert";



export var axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.response.use((resp: AxiosResponse) => {
    showToast({ color: "#155724", header: "Success", message: resp.data.message, open: true })
    return resp;

}, (error: AxiosError) => {
    console.log(error.response);
    showToast({ color: "#f55b6f", header: "Error", message: error.response?.data.message, open: true })
    return Promise.reject(error);
})

