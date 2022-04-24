import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	currentPost: {},
};

export const fetchUserCurrentPost = createAsyncThunk(
	"fetchUserCurrentPost",
	async ({ user_id, post_id }) => {
		try {
			const result = await axios.get(
				`http://localhost:5000/api/post/user/${post_id}/${user_id}`
			);
			return result.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const fetchCurrentPost = createAsyncThunk(
	"fetchCurrentPost",
	async (post_id) => {
		try {
			const result = await axios.get(
				`http://localhost:5000/api/post/no_user/${post_id}`
			);
			return result.data;
		} catch (error) {
			console.log(error);
		}
	}
);
const fetchCurrentPostSlice = createSlice({
	name: "fetchCurrentPost",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCurrentPost.fulfilled, (state, action) => {
				state.currentPost = action.payload;
			})
			.addCase(fetchUserCurrentPost.fulfilled, (state, action) => {
				state.currentPost = action.payload;
			});
	},
});

export default fetchCurrentPostSlice.reducer;
