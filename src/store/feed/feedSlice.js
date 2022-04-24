import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	feedPosts: [],
};

export const fetchUserFeed = createAsyncThunk(
	"fetchUserFeedPost",
	async (id) => {
		const response = await axios.get(
			`http://localhost:5000/api/post/feed/${id}`
		);

		return response.data;
	}
);

export const fetchFeed = createAsyncThunk("fetchFeedPost", async () => {
	const response = await axios.get(`http://localhost:5000/api/post/feed/all`);

	return response.data;
});
const feed = createSlice({
	name: "feed",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchUserFeed.fulfilled, (state, action) => {
				state.feedPosts = action.payload;
			})
			.addCase(fetchFeed.fulfilled, (state, action) => {
				state.feedPosts = action.payload;
			});
	},
});

// export const { logout } = auth.actions;
export default feed.reducer;
