import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProjectCard } from "../../types/types";

interface cardPageSliceState {
    project: IProjectCard | null;
    isLoading: boolean;
}

const initialState: cardPageSliceState = {
    project: null,
    isLoading: false,
}

const projectPageSlice = createSlice({
    name: "currentProject",
    initialState,
    reducers: {
        fetchProject: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        fetchProjectSuccess: (state, action: PayloadAction<IProjectCard>) => {
            state.project = action.payload;
            state.isLoading = false;
        },
        
        fetchProjectFailure: (state) => {
            state.isLoading = false
        },
    }
})

export default projectPageSlice.reducer
export const {fetchProject, fetchProjectSuccess, fetchProjectFailure} = projectPageSlice.actions