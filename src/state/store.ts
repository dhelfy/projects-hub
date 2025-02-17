import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cardReducer from "./slices/cardSlice"
import filterReducer from "./slices/filterSlice"
import authReducer from "./slices/authSlice"
import modalReducer from "./slices/modalSlice"
import cardPageReducer from "./slices/cardPageSlice"
import projectsReducer from "./slices/projectsSlice"
import projectPageReducer from "./slices/projectPageSlice"
import userReducer from "./slices/userSlice"
import rootSaga from "../sagas/rootSaga";

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        cardReducer,
        filterReducer,
        authReducer,
        modalReducer,
        cardPageReducer,
        projectsReducer,
        projectPageReducer,
        userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
})

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store