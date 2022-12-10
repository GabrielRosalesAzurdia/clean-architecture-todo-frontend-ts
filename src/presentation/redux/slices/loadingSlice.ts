import { createSlice } from "@reduxjs/toolkit";

//? Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = { formTDLoading: boolean; formFAQLoading: boolean };
const initialState: InitialState = {
	formTDLoading: false,
	formFAQLoading: false,
};

export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		//* Gives loading green light to show
		turnOnformTDLoading: (state) => {
			return { ...state, formTDLoading: true };
		},
		//* Shouts down the loading
		turnOffformTDLoading: (state) => {
			return { ...state, formTDLoading: false };
		},
		turnOnformFAQLoading: (state) => {
			return { ...state, formFAQLoading: true };
		},
		turnOffformFAQLoading: (state) => {
			return { ...state, formFAQLoading: false };
		},
	},
});

export const {
	turnOnformTDLoading,
	turnOffformTDLoading,
	turnOnformFAQLoading,
	turnOffformFAQLoading,
} = loadingSlice.actions;
export default loadingSlice.reducer;
