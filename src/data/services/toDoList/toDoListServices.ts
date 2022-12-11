//* Gets data from the Local Storage and the api for the ToDoList
import {
	LocalStorageError,
	Responses,
	ServerError,
	toDoListItemApi,
} from "@/domain/models";

/**
 * Gets the to do list from the Local Storage
 * @returns the json list of todos
 *
 * @throws {@link LocalStorageError}
 * This error happens if the list does not exist in the local storage
 */
export function getTodoListLocaLStorage(): string {
	let listFromLocalStorage = localStorage.getItem("todolist");
	if (!listFromLocalStorage) {
		throw new LocalStorageError("There is not a todo list");
	}
	return listFromLocalStorage;
}

/**
 * Sets the locla storage for the to do list with a given value and the key `todolist`
 * @param toDoList - A list of {@link toDoListItemApi} to set in the local storage
 * @returns  A JSON with a success status
 */
export function setTodoListLocaLStorage(toDoList: toDoListItemApi[]): string {
	localStorage.setItem("todolist", JSON.stringify(toDoList));
	return Responses.SUCCESS_GET;
}

/**
 * Gets the to do list from the api
 * @returns  A promise with a JSON list of todos
 *
 * @throws {@link ServerError}
 * This error happens if the api fails
 */
export function getTodoListApi(): Promise<string> {
	//TODO make a call to the api
	//? this should do a GET to have the list of todos,
	//? return Promise<string|ServerError>
	throw new ServerError("La api falló");
}
