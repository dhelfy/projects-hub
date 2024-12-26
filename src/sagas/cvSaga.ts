import {all, call, put, takeEvery, takeLatest} from "typed-redux-saga"
import { addCard, addCardFailure, addCardSuccess, fetchCards, fetchCardsSuccess } from "../state/slices/cardSlice.ts"
import { addNewCv, getAllCvs } from "../API/cvsAPI.ts"
import { PayloadAction } from "@reduxjs/toolkit"

interface INewCV {
    fullName: string,
    profession: string,
    tag: string,
    information: string,
    phoneNumber: string,
    email: string,
    course: number,
    login: string,
    password: string,
    skills: string,
    additionalInfo: string,
    contactInfo: string,
    experienceYears: number
}

function* workFetchCards() {
    try {
        const response = yield* call(getAllCvs)

        const cards = response.data
        yield put(fetchCardsSuccess(cards))
    } catch (error) {
        console.log(error)
    }
}

function* workAddNewCV(action: PayloadAction<INewCV>) {
    try {
        const cv = action.payload;
        const response = yield* call(addNewCv, cv);

        if (response.status === 200) {
            yield put(addCardSuccess());
        }
    } catch (error) {
        yield put(addCardFailure());
        console.log(error);
    }
}

function* cardSaga () {
    yield all([
        takeEvery(fetchCards, workFetchCards),
        takeLatest(addCard, workAddNewCV)
    ]) 
}

export default cardSaga