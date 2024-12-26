import { users } from "../../mock_data/users.ts";
import { projects } from "../../mock_data/projects.ts";
import { IProjectCard } from "../types/types.ts";
import { instance } from "./axiosInstance.ts";

export function getUserProjects(userId: number) {
    const user = users.find((u) => u.id === userId);
    if (!user) return [];

    return user.projects.map((projectId) => projects.find((project) => project.id === projectId));
}

export function getProjectByName(projectName: string): IProjectCard | undefined {
    const project = projects.find((project) => project.name === projectName)

    return project
}

export function getAllProjects() {
    return instance.get('/projects')
}