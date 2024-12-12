import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.filterReducer

export const selectAllOptions = createSelector(root, (root) => root.options[0])