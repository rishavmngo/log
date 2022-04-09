import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	userInfo: {},
};

export const setUser = createAsyncThunk("setUser", async (id) => {
	console.log(id);
	try {
		const result = await axios.post(
			"http://localhost:5000/api/auth/userInfo",
			{
				id,
			}
		);

		return result.data;
	} catch (error) {
		console.log(error);
		return {};
	}
});

const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		removeUser(state, action) {
			state.userInfo = {};
		},
	},
	extraReducers(builder) {
		builder.addCase(setUser.fulfilled, (state, action) => {
			state.userInfo = action.payload;
		});
	},
});

export const { removeUser } = user.actions;
export default user.reducer;
