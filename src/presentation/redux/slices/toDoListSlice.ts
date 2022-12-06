import { ToDoList } from "@/domain/models/toDoList";
import { ToDOListItem } from "@/domain/models/toDoListItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//? Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = ToDOListItem[];
const initialState: InitialState = [];

export const toDoListSlice = createSlice({
	name: "toDoList",
	initialState,
	reducers: {
		updateToDoList: (state, action: PayloadAction<ToDOListItem[]>) => {
			return (state = action.payload);
		},
	},
});

export const { updateToDoList } = toDoListSlice.actions;
export default toDoListSlice.reducer;
