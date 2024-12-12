import {call, put, takeEvery, delay} from "typed-redux-saga"
import { fetchCards, fetchCardsSuccess } from "../state/slices/cardSlice.ts"
import { cards } from "../data/cards.ts"

function* workFetchCards(): Generator<unknown, void> {
    yield delay(1000);
    
    yield put(fetchCardsSuccess(cards))
}

function* cardSaga () {
    yield takeEvery(fetchCards, workFetchCards)
}

export default cardSaga