import {call, put, takeEvery} from "typed-redux-saga"
import { getAllProjects } from "../API/projectsAPI.ts"
import { fetchProjects, fetchProjectsSuccess } from "../state/slices/projectsSlice.ts"

function* workFetchProjects(): Generator<unknown, void> {
    try {
        const response = {data: yield* call(getAllProjects)}

        const projects = response.data
        yield put(fetchProjectsSuccess(projects))
    } catch (error) {
        console.log(error)
    }
}

function* projectsSaga () {
    yield takeEvery(fetchProjects, workFetchProjects)
}

export default projectsSaga