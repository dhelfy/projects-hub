import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
    isLoading: boolean;
    isAuth: boolean;
    username: string;
    error: string | null
}

const initialState: IAuthState = {
    isLoading: false,
    isAuth: false,
    username: '',
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{login: string, password: string}>) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action: PayloadAction<{login: string}>) => {
            state.isAuth = true
            state.username = action.payload.login
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        logout: (state) => {
            state.isAuth = false
            state.username = ''
        },
    }
})

export default authSlice.reducer
export const { login, logout, loginFailure, loginSuccess } = authSlice.actions