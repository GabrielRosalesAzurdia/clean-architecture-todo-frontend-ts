import { ToDoListItem } from "@/domain/models";
import { Failure } from "@/domain/models";
import { toDoListItemRepository } from "@/domain/repositories";

/**
 * Contract of the addItem use case for {@link ToDoListItem}
 */
export interface addItem {
	/**
	 * Contract of the addItem use case method
	 * @param item - A {@link ToDoListItem} object that will be added to the list, goes without id
	 * @returns Either the {@link ToDoListItem} with the id given by the api of a {@link Failure}
	 */
	addItem(item: ToDoListItem): Promise<ToDoListItem | Failure>;
}

/**
 * Implementation of the addItem use case for {@link ToDoListItem}
 */
export class addItemImpl implements addItem {
	/**
	 * Connection with the repository
	 */
	respository: toDoListItemRepository;

	/**
	 * Creaetes an addItemImpl
	 * @param repository - A repository {@link toDoListItemRepository}, when used give the
	 * implementation of the repository toDoListItemRepositoryImpl
	 */
	constructor(repository: toDoListItemRepository) {
		this.respository = repository;
	}

	/**
	 * Implementation of the addItem use case method
	 * @param item - A {@link ToDoListItem} object that will be added to the list, goes without id
	 * @returns Either the {@link ToDoListItem} with the id given by the api of a {@link Failure}
	 */
	addItem(item: ToDoListItem): Promise<ToDoListItem | Failure> {
		return this.respository.addItemToList(item);
	}
}
