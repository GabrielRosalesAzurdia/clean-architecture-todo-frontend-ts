import { ToDoListItem } from "@/domain/models";

//* Definition of the repository, what will return
export interface toDoListRepository {
	getToDoList(): ToDoListItem[];
}
