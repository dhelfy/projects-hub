import axios from "axios";

export const instance = axios.create({
    baseURL: "http://10.3.18.54:5544/api"
})