import { ToDoList } from "@/domain/models/toDoList";
import { ToDoListItem } from "@/domain/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//? Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = ToDoList;

/**
 * Initial state of the to do lsit is a strcuture with a value of an emtpy array
 */
const initialState: InitialState = { value: [] };

/**
 * Slice of the to do list
 */
export const toDoListSlice = createSlice({
	name: "toDoList",
	initialState,
	reducers: {
		/**
		 * Sets all the list to be the payload
		 * @param state - the current state structure
		 * @param action - receives a list of todos
		 * @returns a completely new value for the state structure
		 */
		setToDoList: (state, action: PayloadAction<ToDoListItem[]>) => {
			return (state = { value: action.payload });
		},
		/**
		 * Adds an item to the list
		 * @param state - the current state structure
		 * @param action - receives an item to add to the to do list
		 * @returns the same value for the state structure plus the new item given
		 */
		addToDoListItem: (state, action: PayloadAction<ToDoListItem>) => {
			return (state = { value: [...state.value, action.payload] });
		},
		/**
		 * Deletes an item from the list
		 * @param state - the current state structure
		 * @param action - redeives an id from an {@link ToDoListItem} to delete from the to do list
		 * @returns the same value for the state structure minus the item to which the given id belongs
		 */
		deleteToDoListItem: (state, action: PayloadAction<string>) => {
			return {
				value: state.value.filter((element) => {
					return element.id != action.payload;
				}),
			};
		},
	},
});

export const { deleteToDoListItem, addToDoListItem, setToDoList } =
	toDoListSlice.actions;
export default toDoListSlice.reducer;
