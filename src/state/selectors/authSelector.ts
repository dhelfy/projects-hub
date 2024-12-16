import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.authReducer

export const selectIsAuth = createSelector(root, (root) => root.isAuth)
export const selectUsername = createSelector(root, (root) => root.username)