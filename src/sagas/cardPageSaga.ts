import {call, put, takeLatest} from "typed-redux-saga"
import { fetchCv, fetchCvSuccess, fetchCvFailure } from "../state/slices/cardPageSlice.ts"
import { getCvById } from "../API/cvsAPI.ts"
import { PayloadAction } from "@reduxjs/toolkit";

function* workFetchCard(action: PayloadAction<number>): Generator<unknown, void> {
    try {
        const id = action.payload;
        const card = yield* call(getCvById, id);

        if (!card) {
            throw new Error("Card not found");
        }

        yield put(fetchCvSuccess(card));
    } catch (error) {
        console.error(error);
        yield put(fetchCvFailure());
    }
}


function* cardPageSaga () {
    yield takeLatest(fetchCv, workFetchCard)
}

export default cardPageSaga