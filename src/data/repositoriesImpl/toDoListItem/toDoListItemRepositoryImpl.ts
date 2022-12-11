import {
	addItemToListApi,
	addItemToListLocalStorage,
	deleteItemFromListApi,
	deleteItemFromListLocalStorage,
	setTodoListLocaLStorage,
} from "@/data/services";
import {
	Failure,
	LocalStorageError,
	LocaLStorageFailure,
	ServerFailure,
	ToDoListItem,
} from "@/domain/models";
import { toDoListItemRepository } from "@/domain/repositories";

/**
 * Implementation of the repository used by the {@link ToDoListItem}
 */
export class ToDoListItemRepositoryImpl implements toDoListItemRepository {
	/**
	 * Implementation of the addItemToList method
	 * @param item - A {@link ToDoListItem} object that will be added to the list, goes without id
	 * @returns Either the {@link ToDoListItem} with the id given by the api or a {@link LocaLStorageFailure} | {@link ServerFailure}
	 */
	async addItemToList(item: ToDoListItem): Promise<ToDoListItem | Failure> {
		try {
			let response = await addItemToListApi(item);
			try {
				addItemToListLocalStorage(response);
			} catch (e) {
				if (e instanceof LocalStorageError) {
					setTodoListLocaLStorage([]);
					addItemToListLocalStorage(response);
				}
				return new LocaLStorageFailure();
			}
			let newToDoListItem: ToDoListItem = {
				id: response.id,
				title: response.title,
				description: response.message,
			};
			return newToDoListItem;
		} catch {
			return new ServerFailure();
		}
	}

	/**
	 * Implementation of the deleteItemFromList method
	 * @param id - The id of the {@link ToDoListItem} that wants to be deleted
	 * @returns Either `a json respose from the api` or a {@link LocaLStorageFailure} | {@link ServerFailure}
	 */
	async deleteItemFromList(id: string) {
		try {
			let response = await deleteItemFromListApi(id);
			try {
				deleteItemFromListLocalStorage(id);
			} catch (e) {
				if (e instanceof LocalStorageError) {
					setTodoListLocaLStorage([]);
					deleteItemFromListApi(id);
				}
				return new LocaLStorageFailure();
			}
			return response;
		} catch {
			return new ServerFailure();
		}
	}
}
