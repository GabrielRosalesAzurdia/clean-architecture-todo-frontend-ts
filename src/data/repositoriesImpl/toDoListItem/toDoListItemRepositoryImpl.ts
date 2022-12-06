import { addItemToListApi, deleteItemFromListApi } from "@/data/services";
import { ToDoListItem, toDoListItemApi } from "@/domain/models";
import { toDoListItemRepository } from "@/domain/repositories";
import {v4 as uuid } from "uuid";

//* Implements the repository with actual use of the services and adaptation
//* of the data
export class ToDoListItemRepositoryImpl implements toDoListItemRepository {
	addItemToList(item: ToDoListItem) {
		let toDoListItemAsApi: toDoListItemApi = {
			id: uuid(),
			title: item.title,
			message: item.description,
		};
		var response = addItemToListApi(toDoListItemAsApi);
		return response;
	}

	deleteItemFromList(id: string) {
		let response = deleteItemFromListApi(id);
		return response;
	}
}
