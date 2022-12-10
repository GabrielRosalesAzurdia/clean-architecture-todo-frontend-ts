import { Failure, ToDoList } from "@/domain/models";

//* Definition of the repository, what will return
export interface toDoListRepository {
	getToDoList(): Promise<ToDoList | Failure>;
}
