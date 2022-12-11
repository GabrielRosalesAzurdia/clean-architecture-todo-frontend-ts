import { Failure } from "@/domain/models";
import { toDoListItemRepository } from "@/domain/repositories";

/**
 * Contract of the deleteItem use case for ToDoListItem
 */
export interface deleteItem {
	/**
	 * Contract of the deleteItem use case method
	 * @param id - The id of the ToDoListItem that wants to be deleted
	 * @returns Either a json respose from the api or a Failure
	 */
	deleteItem(id: string): Promise<string | Failure>;
}

/**
 * Implementation of the deleteItem use case for ToDoListItem
 */
export class deleteItemImpl implements deleteItem {
	/**
	 * Connection with the repository
	 */
	respository: toDoListItemRepository;

	/**
	 * Creaetes an deleteItemImpl
	 * @param repository - A repository toDoListItemRepository, when used give the
	 * implementation of the repository toDoListItemRepositoryImpl
	 */
	constructor(repository: toDoListItemRepository) {
		this.respository = repository;
	}

	/**
	 * Implementation of the deleteItem use case method
	 * @param id - The id of the ToDoListItem that wants to be deleted
	 * @returns Either a json respose from the api or a Failure
	 */
	deleteItem(id: string): Promise<string | Failure> {
		return this.respository.deleteItemFromList(id);
	}
}
