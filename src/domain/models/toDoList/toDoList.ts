import { ToDoListItem } from "../toDoListItem";

/**
 * Structure of a list of {@link ToDoListItem}
 */
export interface ToDoList {
	/**
	 * Contains a list of {@link ToDoListItem}
	 */
	value: ToDoListItem[];
}
