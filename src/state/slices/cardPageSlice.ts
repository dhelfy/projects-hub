import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IStudentCard } from "../../types/types";

interface cardPageSliceState {
    card: IStudentCard | null;
    isLoading: boolean;
}

const initialState: cardPageSliceState = {
    card: null,
    isLoading: false,
}

const cardPageSlice = createSlice({
    name: "currentCard",
    initialState,
    reducers: {
        fetchCard: (state, action: PayloadAction<number>) => {
            state.isLoading = true;
        },
        fetchCardSuccess: (state, action: PayloadAction<IStudentCard>) => {
            console.log("Reducer fetchCardSuccess payload:", action.payload); // Логируем payload
            state.card = action.payload;
            state.isLoading = false;
        },
        
        fetchCardFailure: (state) => {
            state.isLoading = false
        },
    }
})

export default cardPageSlice.reducer
export const {fetchCard, fetchCardSuccess, fetchCardFailure} = cardPageSlice.actions
