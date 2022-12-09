import { Failure } from "@/domain/models";
import { toDoListItemRepository } from "@/domain/repositories";

export interface deleteItem {
	deleteItem(id: string): Promise<string | Failure>;
}

export class deleteItemImpl implements deleteItem {
	respository: toDoListItemRepository;

	constructor(repository: toDoListItemRepository) {
		this.respository = repository;
	}

	deleteItem(id: string): Promise<string | Failure> {
		return this.respository.deleteItemFromList(id);
	}
}
