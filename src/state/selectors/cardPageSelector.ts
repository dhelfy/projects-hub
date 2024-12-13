import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.cardPageReducer

export const selectCard = createSelector(root, (root) => root.card)