import { all } from "redux-saga/effects";
import cardSaga from "./cardSaga";

// корневая сага
export default function* rootSaga() {
    yield all([
        cardSaga(),
    ])
}