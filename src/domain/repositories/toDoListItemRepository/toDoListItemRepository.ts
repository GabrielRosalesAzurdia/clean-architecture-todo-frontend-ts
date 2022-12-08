import { ToDoListItem } from "@/domain/models";

//* Definition of the repository, what it needs and what will return
export interface toDoListItemRepository {
	addItemToList(item: ToDoListItem): ToDoListItem;
	deleteItemFromList(id: string): string;
}
