//* Gets data from the Local Storage and the api for the ToDoListItem
import { Responses, ToDoListItem, toDoListItemApi } from "@/domain/models";
import { ServerError, LocalStorageError } from "@/domain/models";
import { v4 as uuid } from "uuid";

/**
 * Adds a to do list item to the local storage
 * @param item - A {@link toDoListItemApi} to be added
 * @returns the item given as a param
 *
 * @throws {@link LocalStorageError}
 * This error happens if the list does not exist in the local storage
 */
export function addItemToListLocalStorage(
	item: toDoListItemApi
): toDoListItemApi {
	const listLocalStorage = localStorage.getItem("todolist");
	if (!listLocalStorage) {
		throw new LocalStorageError("There is not a todo list");
	}
	const list = JSON.parse(listLocalStorage);
	list.push(item);
	localStorage.setItem("todolist", JSON.stringify(list));
	return item;
}

/**
 * Adds a to do list item to the api
 * @param item - A {@link ToDoListItem} to be added
 * @returns A promise with a {@link toDoListItemApi} object
 *
 * @throws {@link ServerError}
 * This error happens if the api fails
 */
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

/**
 * Deletes a to do list item from the local storage
 * @param id - The id of the item to be deleted
 * @returns A JSON with a success status
 *
 * @throws {@link LocalStorageError}
 * This error happens if the list does not exist in the local storage
 */
export function deleteItemFromListLocalStorage(id: string): string {
	const listLocalStorage = localStorage.getItem("todolist");
	if (!listLocalStorage) {
		throw new LocalStorageError("el Local Store fallo en deleteTodoListItem");
	}
	let list = JSON.parse(listLocalStorage);
	let newList = list.filter((element: toDoListItemApi) => element.id != id);
	localStorage.setItem("todolist", JSON.stringify(newList));
	return Responses.SUCCESS_DELETE;
}

/**
 * Deletes a to do list item from api
 * @param id - The id of the item to be deleted
 * @returns A json respose from the api
 *
 * @throws {@link ServerError}
 * This error happens if the api fails
 */ export async function deleteItemFromListApi(id: string): Promise<string> {
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
