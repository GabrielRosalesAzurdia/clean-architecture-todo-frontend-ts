import { ToDOListItem } from "@/domain/models/toDoListItem";

export interface toDoListItemRepository {
	addItemToList(item: ToDOListItem): string;
	deleteItemFromList(id: number): string;
}
