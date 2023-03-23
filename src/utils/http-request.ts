import axios from "axios"
import * as http from "http";

const httpRequest = axios.create({
    baseURL: '/api',
    headers: {
        "Content-Type": "application/json",
        charset: "utf8"
    }
})

httpRequest.interceptors
    .response.use(response => response.data, error => Promise.reject(error))
export default httpRequest