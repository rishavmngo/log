import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	currentPostLiked: false,
	currentPostUnliked: false,
	processing: false,
};

export const like = createAsyncThunk(
	"likePost",
	async ({ user_id, post_id }) => {
		const response = await axios.get(
			`http://localhost:5000/api/likes/${user_id}/${post_id}`
		);

		return response.data;
	}
);

export const unlike = createAsyncThunk(
	"unlikePost",
	async ({ user_id, post_id }) => {
		const response = await axios.delete(
			`http://localhost:5000/api/likes/${user_id}/${post_id} `
		);

		return response.data;
	}
);
const likes = createSlice({
	name: "likes",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(like.fulfilled, (state, action) => {
				state.currentPostLiked = true;
				state.currentPostUnliked = false;
				state.processing = false;
			})
			.addCase(unlike.fulfilled, (state, action) => {
				state.currentPostUnliked = true;
				state.currentPostLiked = false;
				state.processing = false;
			})
			.addCase(like.pending, (state, action) => {
				state.processing = true;
			})
			.addCase(unlike.pending, (state, action) => {
				state.processing = true;
			});
	},
});

export default likes.reducer;
