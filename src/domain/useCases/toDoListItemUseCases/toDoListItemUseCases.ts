import { ToDoListItem } from "@/domain/models";
import { toDoListItemRepository } from "@/domain/repositories";

//* Definition of the UseCase, what it needs and what will return
export interface toDoListItemUseCases {
	addItem(item: ToDoListItem): ToDoListItem;
	deleteItem(id: string): string;
}

//* Implementation of the UseCase Using the Repository
export class toDoListItemUseCasesImpl implements toDoListItemUseCases {
	repository: toDoListItemRepository;

	constructor(repository: toDoListItemRepository) {
		this.repository = repository;
	}

	addItem(item: ToDoListItem) {
		return this.repository.addItemToList(item);
	}

	deleteItem(id: string) {
		return this.repository.deleteItemFromList(id);
	}
}
