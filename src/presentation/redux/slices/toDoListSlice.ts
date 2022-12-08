import { ToDoList } from "@/domain/models/toDoList";
import { ToDoListItem } from "@/domain/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//? Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = ToDoList;
const initialState: InitialState = { value: [] };

export const toDoListSlice = createSlice({
	name: "toDoList",
	initialState,
	reducers: {
		//* Sets all the list to be the payload, use when calling the api
		setToDoList: (state, action: PayloadAction<ToDoListItem[]>) => {
			return (state = { value: action.payload });
		},
		//* Add an item to the list, use when using the form
		addToDoListItem: (state, action: PayloadAction<ToDoListItem>) => {
			return (state = { value: [...state.value, action.payload] });
		},
		//* Delete an item from the list, use when using the list
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
