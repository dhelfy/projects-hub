import { all } from "redux-saga/effects";
import cvSaga from "./cvSaga";
import cardPageSaga from "./cardPageSaga";
import projectsSaga from "./projectsSaga";
import projectPageSaga from "./projectPageSaga"
import userSaga from "./userSaga";
import authSaga from "./authSaga"

// корневая сага
export default function* rootSaga() {
    yield all([
        cvSaga(),
        cardPageSaga(),
        projectsSaga(),
        projectPageSaga(),
        userSaga(),
        authSaga()
    ])
}