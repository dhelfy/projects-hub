import { users } from "../../mock_data/users.ts";
import { cvs } from "../../mock_data/cvs.ts";
import { IStudentCard } from "../types/types.ts";
import { instance } from "./axiosInstance.ts";

export function getUserCvs(userId: number) {
    const user = users.find((u) => u.id === userId);
    if (!user) return [];

    return user.cv.map((cvId) => cvs.find((cv) => cv.id === cvId));
}

export function getCvById(cvId: number): IStudentCard | undefined {
    const cv = cvs.find((cv) => cv.id === cvId)

    return cv
}

export async function getAllCvs() {
    return await instance.get("/resumes") 
}

export async function addNewCv(cv: any) {
    return await instance.post('/resumes', cv)
}