import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.modalReducer

export const selectAllModals = createSelector(root, (root) => root.modals)

export const selectModalByName = (name: string) => createSelector(selectAllModals, (modals) => modals.find((modal) => modal.name === name));