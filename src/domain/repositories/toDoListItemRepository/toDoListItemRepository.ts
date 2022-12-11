import { ToDoListItem } from "@/domain/models";
import { Failure } from "@/domain/models";

/**
 * Contract of the repository used by the {@link ToDoListItem}
 */
export interface toDoListItemRepository {
	/**
	 * Contract of the addItemToList method
	 * @param item - A {@link ToDoListItem} object that will be added to the list, goes without id
	 * @returns Either the {@link ToDoListItem} with the id given by the api or a {@link Failure}
	 */
	addItemToList(item: ToDoListItem): Promise<ToDoListItem | Failure>;
	/**
	 * Contract of the deleteItemFromList method
	 * @param id - The id of the {@link ToDoListItem} that wants to be deleted
	 * @returns Either a json respose from the api or a {@link Failure}
	 */
	deleteItemFromList(id: string): Promise<string | Failure>;
}
