import { users } from "../../mock_data/users.ts";
import { projects } from "../../mock_data/projects.ts";
import { IProjectCard } from "../types/types.ts";

export function getUserProjects(userId: number) {
    const user = users.find((u) => u.id === userId);
    if (!user) return [];

    return user.projects.map((projectId) => projects.find((project) => project.id === projectId));
}

export function getProjectById(projectId: number): IProjectCard | undefined {
    const project = projects.find((project) => project.id === projectId)

    return project
}

export function getAllProjects(): IProjectCard[] {
    return projects
}