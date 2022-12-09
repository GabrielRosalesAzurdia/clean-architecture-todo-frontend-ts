import { ToDoListItem } from "@/domain/models";
import { Failure } from "@/domain/models";
import { toDoListItemRepository } from "@/domain/repositories";

export interface addItem {
	addItem(item: ToDoListItem): Promise<ToDoListItem | Failure>;
}

export class addItemImpl implements addItem {
	respository: toDoListItemRepository;

	constructor(repository: toDoListItemRepository) {
		this.respository = repository;
	}

	addItem(item: ToDoListItem): Promise<ToDoListItem | Failure> {
		return this.respository.addItemToList(item);
	}
}
