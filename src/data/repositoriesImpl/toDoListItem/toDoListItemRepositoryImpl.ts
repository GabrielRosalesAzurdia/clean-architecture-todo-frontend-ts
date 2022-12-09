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

//* Implements the repository with actual use of the services and adaptation
//* of the data
export class ToDoListItemRepositoryImpl implements toDoListItemRepository {
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
