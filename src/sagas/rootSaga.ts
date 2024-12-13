import { all } from "redux-saga/effects";
import cardSaga from "./cardSaga";
import cardPageSaga from "./cardPageSaga";

// корневая сага
export default function* rootSaga() {
    yield all([
        cardSaga(),
        cardPageSaga()
    ])
}