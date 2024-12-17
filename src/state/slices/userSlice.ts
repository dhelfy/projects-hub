import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInvitation, IProjectCard, IProjectRequest, IStudentCard, IUser } from "../../types/types";

interface IUserState {
    user: null | IUser;
    cvs: null | IStudentCard[];
    projects: IProjectCard[];
    invitations: null | IInvitation[];
    requests: null | IProjectRequest[];
    isLoading: boolean;
}

const initialState: IUserState = {
    user: null,
    cvs: null,
    invitations: null,
    requests: null,
    projects: [],
    isLoading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUser: (state, action: PayloadAction<{username: string}>) => {
            state.isLoading = true;
        },
        fetchUserSuccess: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.user = action.payload
        },
        fetchUserFailure: (state) => {
            state.isLoading = false;
        },
        clearUser: (state) => {
            state.user = null;
        },
        updateTelegram: (state, action: PayloadAction<{ login: string; newTelegram: string }>) => {
            state.isLoading = true
        },
        updateTelegramSuccess: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false
            state.user = action.payload
        },
        updateTelegramFailure: (state) => {
            state.isLoading = false
        },
        fetchCvs: (state, action: PayloadAction<{ login: string;}>) => {
            state.isLoading = true
        },
        fetchCvsSuccess: (state, action: PayloadAction<IStudentCard[]>) => {
            state.isLoading = false
            state.cvs = action.payload
        },
        fetchCvsFailure: (state) => {
            state.isLoading = false
        },
        fetchProjects: (state, action: PayloadAction<{ login: string;}>) => {
            state.isLoading = true
        },
        fetchProjectsSuccess: (state, action: PayloadAction<IProjectCard[]>) => {
            state.isLoading = false
            state.projects = action.payload
        },
        fetchProjectsFailure: (state) => {
            state.isLoading = false
        },
        fetchInvitations: (state, action: PayloadAction<{ login: string;}>) => {
            state.isLoading = true
        },
        fetchInvitationsSuccess: (state, action: PayloadAction<IInvitation[]>) => {
            state.isLoading = false
            state.invitations = action.payload
        },
        fetchInvitationsFailure: (state) => {
            state.isLoading = false
        },
        fetchRequests: (state, action: PayloadAction<{ login: string;}>) => {
            state.isLoading = true
        },
        fetchRequestsSuccess: (state, action: PayloadAction<IProjectRequest[]>) => {
            state.isLoading = false
            state.requests = action.payload
        },
        fetchRequestsFailure: (state) => {
            state.isLoading = false
        },
    }
})

export default userSlice.reducer
export const {
    fetchUser, fetchUserSuccess, fetchUserFailure, 
    clearUser,
    updateTelegram, updateTelegramSuccess, updateTelegramFailure,
    fetchCvs, fetchCvsFailure, fetchCvsSuccess,
    fetchProjects, fetchProjectsFailure, fetchProjectsSuccess,
    fetchInvitations, fetchInvitationsFailure, fetchInvitationsSuccess,
    fetchRequests, fetchRequestsFailure, fetchRequestsSuccess
} = userSlice.actions