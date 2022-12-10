import {
	LocalStorageError,
	ServerError,
	toDoListItemApi,
} from "@/domain/models";

//* Gets the data from the local storage
export function getTodoListLocaLStorage(): string {
	let listFromLocalStorage = localStorage.getItem("todolist");
	if (!listFromLocalStorage) {
		throw new LocalStorageError("No hay lista todo");
	}
	return listFromLocalStorage;
}

//* Sets the local Storage
export function setTodoListLocaLStorage(toDoList: toDoListItemApi[]): string {
	localStorage.setItem("todolist", JSON.stringify(toDoList));
	return "{success:200}";
}

//* Gets the data from the API
export function getTodoListApi(): Promise<string> {
	//TODO make a call to the api
	//? this should do a GET to have the list of todos,
	//? return Promise<string|ServerError>
	throw new ServerError("La api falló");
}
