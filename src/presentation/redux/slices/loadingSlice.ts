import { createSlice } from "@reduxjs/toolkit";

//? Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = boolean;
const initialState: InitialState = false;

export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		//* Gives loading green light to show
		turnOnLoading: () => {
			return true;
		},
		//* Shouts down the loading
		turnOffLoading: () => {
			return false;
		},
	},
});

export const { turnOnLoading, turnOffLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
