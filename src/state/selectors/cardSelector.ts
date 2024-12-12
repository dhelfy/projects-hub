import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.cardReducer

export const selectAllCards = createSelector(root, (root) => root.filteredCards)