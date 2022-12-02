import { ToDOListItem } from "../toDoListItem/toDoListItem";

export class ToDoList {
	value: ToDOListItem[];

	constructor(value: ToDOListItem[]) {
		this.value = value;
	}
}
