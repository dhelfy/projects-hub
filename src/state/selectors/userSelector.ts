import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.userReducer

export const selectUser = createSelector(root, (root) => root.user)
export const selectUserCvs = createSelector(root, (root) => root.cvs)
export const selectUserProjects = createSelector(root, (root) => root.projects)
export const selectUserInvitations = createSelector(root, (root) => root.invitations)
export const selectUserRequests = createSelector(root, (root) => root.requests)