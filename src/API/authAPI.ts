import { instance } from "./axiosInstance";

export async function onLogin (login: string, password: string) {
    return await instance.post('/auth', {
        login: login,
        password: password
    })
}