import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    modals: [
        {name: 'authModal', visible: false},
        {name: 'logoutModal', visible: false}
    ]
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setVisible: (state, action: PayloadAction<{name: string}>) => {
            const modal = state.modals.find((modal) => {
                return modal.name === action.payload.name
            })

            if (modal) {
                modal.visible = !modal.visible
            }
        }
    }
})

export default modalSlice.reducer
export const {setVisible} = modalSlice.actions