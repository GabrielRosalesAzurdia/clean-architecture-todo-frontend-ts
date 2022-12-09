import { ToDoListItem } from "@/domain/models";
import { Failure } from "@/domain/models";

//* Definition of the repository, what it needs and what will return
export interface toDoListItemRepository {
	addItemToList(item: ToDoListItem): Promise<ToDoListItem | Failure>;
	deleteItemFromList(id: string): Promise<string | Failure>;
}
