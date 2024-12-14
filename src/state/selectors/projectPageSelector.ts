import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.projectPageReducer

export const selectProject = createSelector(root, (root) => root.project)