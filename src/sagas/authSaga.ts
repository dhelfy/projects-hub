import {call, put, takeLatest} from "typed-redux-saga"
import { PayloadAction } from "@reduxjs/toolkit";
import { login, loginFailure, loginSuccess } from "../state/slices/authSlice.ts";
import { getUserByLogin } from "../API/userAPI.ts";

function* workAuth(action: PayloadAction<{login: string, password: string}>) {
    try {
        const user = {login: action.payload.login, password: action.payload.password}
        const foundUser = yield* call(getUserByLogin, user.login)

        if (!foundUser) {
            yield put(loginFailure("Пользователь не найден"))
            return
        }

        if (foundUser.password !== user.password) {
            yield put(loginFailure("Неверный пароль"))
            return
        }

        if(foundUser) {
            if(foundUser.password === user.password) {
                yield put(loginSuccess({login: user.login}))
            }
        }

    } catch (error) {
        yield put(loginFailure("Произошла ошибка. Попробуйте позже."));
    }
}


function* authSaga () {
    yield takeLatest(login, workAuth)
}

export default authSaga