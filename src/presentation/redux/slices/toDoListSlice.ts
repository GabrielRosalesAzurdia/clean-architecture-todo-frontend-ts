import { ToDoList } from "@/domain/models/toDoList";
import { createSlice } from "@reduxjs/toolkit";

//? Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = ToDoList
const initialState:InitialState = new ToDoList([]);

export const toDoListSlice = createSlice({
	name: "toDoList",
	initialState,
	reducers: {},
});

export default toDoListSlice.reducer;
