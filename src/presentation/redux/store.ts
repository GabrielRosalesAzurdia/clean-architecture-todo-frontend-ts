import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./slices/toDoListSlice";
import loadingReduccer from "./slices/loadingSlice";

/**
 * Store that handles the state of the app
 */
export const store = configureStore({
	/**
	 * State of the app
	 */
	reducer: {
		/**
		 * State of the to do list
		 */
		toDoList: toDoListReducer,
		/**
		 * State of the loading spin
		 */
		loading: loadingReduccer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
