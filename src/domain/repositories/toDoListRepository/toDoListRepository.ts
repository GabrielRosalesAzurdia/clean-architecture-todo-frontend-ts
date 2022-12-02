import { ToDOListItem } from "@/domain/models/toDoListItem";

export interface toDoListRepository {
	getToDoList(): ToDOListItem[];
}
