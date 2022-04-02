import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");

const initialState = {
	user: {},
	loggedIn: !!token,
	loginStatus: "idle",
	registerStatus: "idle",
};

export const login = createAsyncThunk("login", async (user) => {
	const response = await axios.post("http://localhost:5000/api/auth/login", {
		...user,
	});

	const { token, ...withoutToken } = response.data;
	localStorage.setItem("token", token);

	return withoutToken;
});

export const register = createAsyncThunk("register", async (user) => {
	console.log(user);
	const response = await axios.post(
		"http://localhost:5000/api/auth/register",
		{
			...user,
		}
	);
	return response.data;
});

const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		logout(state, action) {
			state.user = {};
			state.loggedIn = false;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload;
				state.loginStatus = "success";
				state.loggedIn = true;
			})
			.addCase(login.pending, (state, action) => {
				state.loginStatus = "pending";
			})
			.addCase(login.rejected, (state, action) => {
				state.loginStatus = "failed";
			})
			.addCase(register.fulfilled, (state, action) => {
				state.registerStatus = "success";
			})
			.addCase(register.pending, (state, action) => {
				state.registerStatus = "pending";
			})
			.addCase(register.rejected, (state, action) => {
				state.registerStatus = "failed";
			});
	},
});

export const { setUser, logout } = auth.actions;
export default auth.reducer;
