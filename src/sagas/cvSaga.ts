import {call, put, takeEvery} from "typed-redux-saga"
import { fetchCards, fetchCardsSuccess } from "../state/slices/cardSlice.ts"
import { getAllCvs } from "../API/cvsAPI.ts"

function* workFetchCards(): Generator<unknown, void> {
    try {
        const response = {data: yield* call(getAllCvs)}

        const cards = response.data
        yield put(fetchCardsSuccess(cards))
    } catch (error) {
        console.log(error)
    }
}

function* cardSaga () {
    yield takeEvery(fetchCards, workFetchCards)
}

export default cardSaga