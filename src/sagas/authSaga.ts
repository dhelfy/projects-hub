import {call, put, takeLatest} from "typed-redux-saga"
import { PayloadAction } from "@reduxjs/toolkit";
import { login, loginFailure, loginSuccess } from "../state/slices/authSlice.ts";
import { onLogin } from "../API/authAPI.ts";

function* workAuth(action: PayloadAction<{login: string, password: string}>) {
    try {
        const user = {login: action.payload.login, password: action.payload.password}
        const response = yield* call(onLogin, user.login, user.password)

        if (response.status === 200) {
            yield put(loginSuccess({login: user.login}))
        }
    } catch (error) {
        yield put(loginFailure("Неверный логин или пароль"));
    }
}


function* authSaga () {
    yield takeLatest(login, workAuth)
}

export default authSaga