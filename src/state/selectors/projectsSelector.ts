import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.projectsReducer

export const selectAllProjects = createSelector(root, (root) => root.filteredProjects)
  