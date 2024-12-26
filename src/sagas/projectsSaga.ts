import {call, put, takeEvery} from "typed-redux-saga"
import { getAllProjects } from "../API/projectsAPI.ts"
import { fetchAllProjects, fetchAllProjectsSuccess } from "../state/slices/projectsSlice.ts"

function* workFetchProjects(): Generator<unknown, void> {
    try {
        const response = yield* call(getAllProjects)

        const projects = response.data

        const parseFields = (projects: any[]) => {
            return projects.map((project) => ({
              ...project,
              contacts: JSON.parse(project.contacts),
              needs: JSON.parse(project.needs),
            }));
          };
          
        const parsedProjects = parseFields(projects);
          
        yield put(fetchAllProjectsSuccess(parsedProjects))
    } catch (error) {
        console.log(error)
    }
}

function* projectsSaga () {
    yield takeEvery(fetchAllProjects, workFetchProjects)
}

export default projectsSaga