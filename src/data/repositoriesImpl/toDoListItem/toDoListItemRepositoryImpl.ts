import { addItemToListApi, deleteItemFromListApi } from "@/data/services";
import { ToDOListItem } from "@/domain/models/toDoListItem";
import { toDoListItemRepository } from "@/domain/repositories";

export class ToDoListItemRepositoryImpl implements toDoListItemRepository {
	addItemToList(item: ToDOListItem) {
		let toDoListItemAsApi = {
			id: item.id,
			title: item.title,
			message: item.description,
		};
		var response = addItemToListApi(toDoListItemAsApi);
		return response;
	}

	deleteItemFromList(id: number) {
		let response = deleteItemFromListApi(id);
		return response;
	}
}
