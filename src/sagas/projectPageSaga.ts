import {call, put, takeLatest} from "typed-redux-saga"
import { getProjectById } from "../API/projectsAPI.ts";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchProjectSuccess, fetchProjectFailure, fetchProject } from "../state/slices/projectPageSlice.ts";

function* workFetchProject(action: PayloadAction<number>): Generator<unknown, void> {
    try {
        const id = action.payload;
        const project = yield* call(getProjectById, id);

        if (!project) {
            throw new Error("Card not found");
        }

        yield put(fetchProjectSuccess(project));
    } catch (error) {
        console.error(error);
        yield put(fetchProjectFailure());
    }
}


function* projectPageSaga () {
    yield takeLatest(fetchProject, workFetchProject)
}

export default projectPageSaga