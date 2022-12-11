import {
	getTodoListApi,
	getTodoListLocaLStorage,
	setTodoListLocaLStorage,
} from "@/data/services";
import {
	Failure,
	LocalStorageError,
	LocaLStorageFailure,
	ServerError,
	ServerFailure,
	ToDoList,
	ToDoListItem,
	toDoListItemApi,
} from "@/domain/models";
import { toDoListRepository } from "@/domain/repositories";

/**
 * Implementation of the repository used by the {@link ToDoList}
 */
export class ToDoListRepositoryImpl implements toDoListRepository {
	/**
	 * Implementation of the getToDoList method
	 * @returns Either a {@link ToDoList} or a {@link LocaLStorageFailure} | {@link ServerFailure}
	 */
	async getToDoList(): Promise<ToDoList | Failure> {
		try {
			let toDoListApi = await getTodoListApi();
			return listParsed(toDoListApi, true);
		} catch (e) {
			if (e instanceof ServerError) {
				try {
					let toDoListLocalStorage = getTodoListLocaLStorage();
					return listParsed(toDoListLocalStorage, false);
				} catch (e) {
					if (e instanceof LocalStorageError) {
						setTodoListLocaLStorage([]);
						let toDoListLocalStorage = getTodoListLocaLStorage();
						return listParsed(toDoListLocalStorage, false);
					}
					return new LocaLStorageFailure();
				}
			}
			return new ServerFailure();
		}
	}
}

/**
 * Helper function to the implementation of the implementation {@link getToDoList} method
 * @param list - A JSON list of todos
 * @param fromApi - A flag to set the local storage or not
 * @returns A list of todos in the frontend format
 */
const listParsed = (list: string, fromApi: boolean): ToDoList => {
	let toDoListParsed: toDoListItemApi[] = JSON.parse(list);
	if (fromApi) {
		setTodoListLocaLStorage(toDoListParsed);
	}
	let newToDoList: ToDoListItem[] = [];
	toDoListParsed.forEach((element: toDoListItemApi) => {
		newToDoList.push({
			title: element.title,
			description: element.message,
			id: element.id,
		});
	});
	return { value: newToDoList };
};
