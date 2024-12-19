import {call, put, select, takeLatest} from "typed-redux-saga"
import { fetchCv, fetchCvSuccess, fetchCvFailure } from "../state/slices/cardPageSlice.ts"
import { getCvById } from "../API/cvsAPI.ts"
import { PayloadAction } from "@reduxjs/toolkit";
import { IStudentCard } from "../types/types.ts";
import { selectAllCards } from "../state/selectors/cardSelector.ts";

function* workFetchCard(action: PayloadAction<number>) {
    try {
        const id = action.payload;

        const allCards: IStudentCard[] = yield* select(selectAllCards)
        const card = allCards.find((card) => card.id === id)

        if (card) {
            yield put(fetchCvSuccess(card))
        } else {
            const fetchedCard = yield* call(getCvById, id)

            if (!fetchedCard) {
                throw new Error("CV not found");
            }

            yield put(fetchCvSuccess(fetchedCard))
        }
    } catch (error) {
        console.error(error);
        yield put(fetchCvFailure());
    }
}


function* cardPageSaga () {
    yield takeLatest(fetchCv, workFetchCard)
}

export default cardPageSaga