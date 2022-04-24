import authReducer from "./auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import preferenceReducer from "./preferences/preferencesSlice";
import commentReducer from "./comment/commentSlice";
import feedReducer from "./feed/feedSlice";
import likesSlice from "./like/like";
import currentPostSlice from "./post/postSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		preference: preferenceReducer,
		comment: commentReducer,
		feed: feedReducer,
		like: likesSlice,
		post: currentPostSlice,
	},
});

export default store;
