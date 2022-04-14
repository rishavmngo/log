import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	comments: [],
	replies: false,
};

export const fetchComment = createAsyncThunk("fetchComments", async (id) => {
	try {
		const result = await axios.get(
			`http://localhost:5000/api/comment/${id}`
		);

		console.log(result.data);
		return result.data;
	} catch (error) {
		console.log(error);
	}
});
export const fetchReplies = createAsyncThunk("fetchReplies", async () => {
	return;
});

const comment = createSlice({
	name: "comment",
	initialState,
	reducers: {
		changeValue: (state, action) => {
			state.replies = !state.replies;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchComment.fulfilled, (state, action) => {
				state.comments = action.payload;
			})
			.addCase(fetchReplies.fulfilled, (state, action) => {
				state.replies = !state.replies;
			});
	},
});

export const { changeValue } = comment.actions;
export default comment.reducer;
