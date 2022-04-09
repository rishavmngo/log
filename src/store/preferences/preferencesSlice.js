import { createSlice } from "@reduxjs/toolkit";

const storedTheme = JSON.parse(localStorage.getItem("darkThemeOn"));

const initialState = {
	darkThemeOn: storedTheme || false,
};

const preference = createSlice({
	name: "preference",
	initialState,
	reducers: {
		toggleDarkTheme(state, action) {
			state.darkThemeOn = action.payload;
			localStorage.setItem(
				"darkThemeOn",
				JSON.stringify(state.darkThemeOn)
			);
		},
	},
});

export const { toggleDarkTheme } = preference.actions;
export default preference.reducer;
