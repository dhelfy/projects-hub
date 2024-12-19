import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.authReducer

export const selectIsAuth = createSelector(root, (root) => root.isAuth)
export const selectError = createSelector(root, (root) => root.error)
export const selectUsername = createSelector(root, (root) => root.username)