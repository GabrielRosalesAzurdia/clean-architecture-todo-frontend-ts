import { Failure, ToDoList } from "@/domain/models";

/**
 * Contract of the repository used by the {@link ToDoList}
 */
export interface toDoListRepository {
	/**
	 * Contract of the getToDoList method
	 * @returns Either a {@link ToDoList} instance or a {@link Failure}
	 */
	getToDoList(): Promise<ToDoList | Failure>;
}
