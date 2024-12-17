import {all, call, put, takeEvery} from "typed-redux-saga"
import { getUserByLogin, getUserCvs, getUserInvitations, getUserProjects, getUserRequests, updateUserTelegram } from "../API/userAPI"
import { fetchCvs, fetchCvsFailure, fetchCvsSuccess, fetchInvitations, fetchInvitationsFailure, fetchInvitationsSuccess, fetchProjects, fetchRequests, fetchRequestsFailure, fetchRequestsSuccess, fetchUser, fetchUserFailure, fetchUserSuccess, updateTelegram, updateTelegramFailure, updateTelegramSuccess } from "../state/slices/userSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { takeLatest } from "redux-saga/effects";
import { fetchProjectsSuccess, fetchProjectsFailure } from "../state/slices/userSlice";

function* workFetchUser(action: PayloadAction<{username: string}>) {
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

function* workUpdateTelegram(action: PayloadAction<{ login: string; newTelegram: string }>) {
    try {
        const { login, newTelegram } = action.payload;

        const updatedUser = yield* call(updateUserTelegram, login, newTelegram);

        yield put(updateTelegramSuccess(updatedUser));
    } catch (error) {
        console.error(error);
        yield put(updateTelegramFailure());
    }
}

function* workFetchCvs(action: PayloadAction<{ login: string; }>) {
    try {
        const { login } = action.payload;

        const cvs = yield* call(getUserCvs, login);

        yield put(fetchCvsSuccess(cvs));
    } catch (error) {
        console.error(error);
        yield put(fetchCvsFailure());
    }
}

function* workFetchProjects(action: PayloadAction<{ login: string; }>) {
    try {
        const { login } = action.payload;

        const projects = yield* call(getUserProjects, login);

        yield put(fetchProjectsSuccess(projects));
    } catch (error) {
        console.error(error);
        yield put(fetchProjectsFailure());
    }
}

function* workFetchInvitations(action: PayloadAction<{ login: string; }>) {
    try {
        const { login } = action.payload;

        const invitations = yield* call(getUserInvitations, login);

        yield put(fetchInvitationsSuccess(invitations));
    } catch (error) {
        console.error(error);
        yield put(fetchInvitationsFailure());
    }
}

function* workFetchRequests(action: PayloadAction<{ login: string; }>) {
    try {
        const { login } = action.payload;

        const requests = yield* call(getUserRequests, login);

        yield put(fetchRequestsSuccess(requests));
    } catch (error) {
        console.error(error);
        yield put(fetchRequestsFailure());
    }
}

function* userSaga () {
    yield all([
        takeEvery(fetchUser, workFetchUser),
        takeEvery(updateTelegram, workUpdateTelegram),
        takeLatest(fetchCvs, workFetchCvs),
        takeLatest(fetchProjects ,workFetchProjects),
        takeLatest(fetchInvitations ,workFetchInvitations),
        takeLatest(fetchRequests ,workFetchRequests)
    ])
}

export default userSaga