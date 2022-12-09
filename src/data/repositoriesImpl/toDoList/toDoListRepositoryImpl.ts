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
	ToDoListItem,
	toDoListItemApi,
} from "@/domain/models";
import { toDoListRepository } from "@/domain/repositories";

//* Implements the repository with actual use of the services and adaptation
//* of the data
export class ToDoListRepositoryImpl implements toDoListRepository {
	async getToDoList(): Promise<ToDoListItem[] | Failure> {
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

const listParsed = (list: string, fromApi: boolean): ToDoListItem[] => {
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
	return newToDoList;
};
