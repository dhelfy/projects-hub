import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
    isAuth: boolean;
    username: string;
}

const initialState: IAuthState = {
    isAuth: false,
    username: ''
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{login: string}>) => {
            state.isAuth = true
            state.username = action.payload.login
        },
        logout: (state) => {
            state.isAuth = false
            state.username = ''
        },
    }
})

export default authSlice.reducer
export const { login, logout } = authSlice.actions