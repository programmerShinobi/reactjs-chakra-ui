import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../Reducer/userReducer";
import { combineReducers } from "redux";

// daftar reducer
const reducer = combineReducers({
    userReducers: userReducers,
    
})

// config store
const store = configureStore({
    reducer,
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export default store;