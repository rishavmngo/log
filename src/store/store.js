import authReducer from "./auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import preferenceReducer from "./preferences/preferencesSlice";
import commentReducer from "./comment/commentSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		preference: preferenceReducer,
		comment: commentReducer,
	},
});

export default store;
