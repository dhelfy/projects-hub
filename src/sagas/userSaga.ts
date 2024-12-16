import {call, put, takeEvery} from "typed-redux-saga"
import { getUserByLogin, getUserCvs, updateUserTelegram } from "../API/userAPI"
import { fetchCvs, fetchCvsFailure, fetchCvsSuccess, fetchUser, fetchUserFailure, fetchUserSuccess, updateTelegram, updateTelegramFailure, updateTelegramSuccess } from "../state/slices/userSlice"
import { PayloadAction } from "@reduxjs/toolkit"

function* workFetchUser(action: PayloadAction<{username: string}>): Generator<unknown, void> {
    try {
        const username = action.payload.username;
        const response = {data: yield* call(getUserByLogin, username)}

        const user = response.data

        if (!user) {
           throw new Error("User not found")
           console.log(username) 
        }

        yield put(fetchUserSuccess(user))
    } catch (error) {
        console.error(error)
        yield put(fetchUserFailure())
    }
}

function* workUpdateTelegram(action: PayloadAction<{ login: string; newTelegram: string }>): Generator<unknown, void> {
    try {
        const { login, newTelegram } = action.payload;

        const updatedUser = yield* call(updateUserTelegram, login, newTelegram);

        yield put(updateTelegramSuccess(updatedUser));
    } catch (error) {
        console.error(error);
        yield put(updateTelegramFailure());
    }
}

function* workFetchCvs(action: PayloadAction<{ login: string; }>): Generator<unknown, void> {
    try {
        const { login } = action.payload;

        const cvs = yield* call(getUserCvs, login);

        yield put(fetchCvsSuccess(cvs));
    } catch (error) {
        console.error(error);
        yield put(fetchCvsFailure());
    }
}

function* userSaga () {
    yield takeEvery(fetchUser, workFetchUser)
    yield takeEvery(updateTelegram, workUpdateTelegram)
    yield takeEvery(fetchCvs, workFetchCvs)
}

export default userSaga