import {call, put, takeLatest, select} from "typed-redux-saga"
import { getProjectById } from "../API/projectsAPI.ts";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchProjectSuccess, fetchProjectFailure, fetchProject } from "../state/slices/projectPageSlice.ts";
import { IProjectCard } from "../types/types.ts";
import { selectAllProjects } from "../state/selectors/projectsSelector.ts";

function* workFetchProject(action: PayloadAction<number>): Generator<unknown, void> {
    try {
        const id = action.payload;

        // Проверяем наличие проекта в Redux
        const allProjects: IProjectCard[] = yield* select(selectAllProjects);
        const project = allProjects.find((proj) => proj.id === id);

        if (project) {
            yield put(fetchProjectSuccess(project)); // Если проект найден в Redux
        } else {
            const fetchedProject = yield* call(getProjectById, id); // Если нет, запрашиваем через API

            if (!fetchedProject) {
                throw new Error("Project not found");
            }

            yield put(fetchProjectSuccess(fetchedProject));
        }
    } catch (error) {
        console.error(error);
        yield put(fetchProjectFailure());
    }
}

function* projectPageSaga () {
    yield takeLatest(fetchProject, workFetchProject)
}

export default projectPageSaga