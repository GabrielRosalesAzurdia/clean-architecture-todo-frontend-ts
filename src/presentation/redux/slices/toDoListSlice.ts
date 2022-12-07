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
		addToDoList: (state, action: PayloadAction<ToDoListItem>) => {
			return (state = { value: [...state.value, action.payload] });
		},
	},
});

export const { addToDoList, setToDoList } = toDoListSlice.actions;
export default toDoListSlice.reducer;
