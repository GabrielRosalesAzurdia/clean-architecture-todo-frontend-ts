import { ToDoListItem } from "@/domain/models";
import { Failure } from "@/domain/models";

//* Definition of the repository, what will return
export interface toDoListRepository {
	getToDoList(): Promise<ToDoListItem[] | Failure>;
}
