import { createSlice } from "@reduxjs/toolkit";

//* Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = {
	/**
	 * Flag for the loading spin at the to do form
	 */
	formTDLoading: boolean;
	/**
	 * Flag for the loading spin at the user feedback form
	 */
	formFAQLoading: boolean;
};

/**
 * Initial state of the loading spin is both formTDLoading and formFAQLoading in false
 */
const initialState: InitialState = {
	formTDLoading: false,
	formFAQLoading: false,
};

/**
 * Slice of the loading spin
 */
export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		/**
		 * Turns on the formTDLoading property
		 * @param state - the current state structure
		 * @returns the property formTDLoading as true
		 */
		turnOnformTDLoading: (state) => {
			return { ...state, formTDLoading: true };
		},
		/**
		 * Turns off the formTDLoading property
		 * @param state - the current state of the structure
		 * @returns the property formTDLoading as false
		 */
		turnOffformTDLoading: (state) => {
			return { ...state, formTDLoading: false };
		},
		/**
		 * Turns on the formFAQLoading property
		 * @param state - the current state of the structure
		 * @returns the property formFAQLoading as true
		 */
		turnOnformFAQLoading: (state) => {
			return { ...state, formFAQLoading: true };
		},
		/**
		 * Turns off the formFAQLoading property
		 * @param state - the current state of the structure
		 * @returns the property formFAQLoading as false
		 */
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
