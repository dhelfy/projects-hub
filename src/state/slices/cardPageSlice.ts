import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IStudentCard } from "../../types/types";

interface cardPageSliceState {
    cv: IStudentCard | null;
    isLoading: boolean;
}

const initialState: cardPageSliceState = {
    cv: null,
    isLoading: false,
}

const cardPageSlice = createSlice({
    name: "currentCard",
    initialState,
    reducers: {
        fetchCv: (state, action: PayloadAction<number>) => {
            state.isLoading = true
        },
        fetchCvSuccess: (state, action: PayloadAction<IStudentCard>) => {
            state.cv = action.payload
            state.isLoading = false
        },
        
        fetchCvFailure: (state) => {
            state.isLoading = false
        },
    }
})

export default cardPageSlice.reducer
export const {fetchCv, fetchCvSuccess, fetchCvFailure} = cardPageSlice.actions
