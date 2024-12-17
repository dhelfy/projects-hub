import {call, put, takeEvery} from "typed-redux-saga"
import { getAllProjects } from "../API/projectsAPI.ts"
import { fetchAllProjects, fetchAllProjectsSuccess } from "../state/slices/projectsSlice.ts"

function* workFetchProjects(): Generator<unknown, void> {
    try {
        const response = {data: yield* call(getAllProjects)}

        const projects = response.data
        yield put(fetchAllProjectsSuccess(projects))
    } catch (error) {
        console.log(error)
    }
}

function* projectsSaga () {
    yield takeEvery(fetchAllProjects, workFetchProjects)
}

export default projectsSaga