import {call, put, takeEvery} from "typed-redux-saga"
import { fetchCards, fetchCardsSuccess } from "../state/slices/cardSlice.ts"
import { getAllCards } from "../API/cardsAPI.ts"

function* workFetchCards(): Generator<unknown, void> {
    try {
        const response = {data: yield* call(getAllCards)}

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