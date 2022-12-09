import { ToDoListItem, toDoListItemApi } from "@/domain/models";
import { ServerError, LocalStorageError } from "@/domain/models";
import { v4 as uuid } from "uuid";

//* Adds data to the local storage
export function addItemToListLocalStorage(
	item: toDoListItemApi
): toDoListItemApi {
	const listLocalStorage = localStorage.getItem("todolist");
	if (!listLocalStorage) {
		throw new LocalStorageError("el Local Store fallo en addTodoListItem");
	}
	const list = JSON.parse(listLocalStorage);
	list.push(item);
	localStorage.setItem("todolist", JSON.stringify(list));
	return item;
}

//*  Adds data to the api
export async function addItemToListApi(
	item: ToDoListItem
): Promise<toDoListItemApi> {
	return mockBackendCreateToDoListItem(item)
		.then((response) => {
			return response;
		})
		.catch((e) => {
			throw new ServerError("Fallo la api en addItemToListApi");
		});
}

//? Functionality created in replacement of the API is going to be removed
const mockBackendCreateToDoListItem = (
	item: ToDoListItem
): Promise<toDoListItemApi> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ id: uuid(), title: item.title, message: item.description });
		}, 2000);
	});
};

//* Deletes an element from the local storage
export function deleteItemFromListLocalStorage(id: string): string {
	const listLocalStorage = localStorage.getItem("todolist");
	if (!listLocalStorage) {
		throw new LocalStorageError("el Local Store fallo en deleteTodoListItem");
	}
	let list = JSON.parse(listLocalStorage);
	let newList = list.filter((element: toDoListItemApi) => element.id != id);
	localStorage.setItem("todolist", JSON.stringify(newList));
	return "{success:204}";
}

//* Deletes an element from the api
export async function deleteItemFromListApi(id: string): Promise<string> {
	return mockBackendDeleteToDoListItem(id)
		.then((response) => {
			return response;
		})
		.catch((e) => {
			throw new ServerError("Fallo la api en DeleteItemToListApi");
		});
}

//? Functionality created in replacement of the API is going to be removed
const mockBackendDeleteToDoListItem = (id: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("{success:204}");
		}, 2000);
	});
};
