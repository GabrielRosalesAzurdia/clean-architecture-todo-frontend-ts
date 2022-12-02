import { ToDOListItem } from "@/domain/models/toDoListItem";
import { toDoListItemRepository } from "@/domain/repositories";

export interface toDoListItemUseCases {
	addItem(item: ToDOListItem): string;
	deleteItem(id: number): string;
}

export class toDoListItemUseCasesImpl implements toDoListItemUseCases {
	repository: toDoListItemRepository;

	constructor(repository: toDoListItemRepository) {
		this.repository = repository;
	}

	addItem(item: ToDOListItem) {
		return this.repository.addItemToList(item);
	}

	deleteItem(id: number) {
		return this.repository.deleteItemFromList(id);
	}
}
