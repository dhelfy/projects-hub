import {call, put, takeLatest} from "typed-redux-saga"
import { fetchCard, fetchCardSuccess, fetchCardFailure } from "../state/slices/cardPageSlice.ts"
import { getCardById } from "../API/cardsAPI.ts"
import { PayloadAction } from "@reduxjs/toolkit";

function* workFetchCard(action: PayloadAction<number>): Generator<unknown, void> {
    try {
        const id = action.payload;
        const card = yield* call(getCardById, id);

        if (!card) {
            throw new Error("Card not found");
        }

        yield put(fetchCardSuccess(card));
    } catch (error) {
        console.error(error);
        yield put(fetchCardFailure());
    }
}


function* cardPageSaga () {
    yield takeLatest(fetchCard, workFetchCard)
}

export default cardPageSaga