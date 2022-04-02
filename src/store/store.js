import authReducer from "./auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: authReducer,
});

export default store;
