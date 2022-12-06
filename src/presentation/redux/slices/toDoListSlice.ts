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
		updateToDoList: (state, action: PayloadAction<ToDoListItem[]>) => {
			return (state = { value: action.payload });
		},
	},
});

export const { updateToDoList } = toDoListSlice.actions;
export default toDoListSlice.reducer;
