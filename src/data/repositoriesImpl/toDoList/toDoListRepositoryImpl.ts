import { getTodoListApi } from "@/data/services";
import { ToDOListItem } from "@/domain/models/toDoListItem";
import { toDoListRepository } from "@/domain/repositories";

export class ToDoListRepositoryImpl implements toDoListRepository {
	getToDoList() {
		let toDoList = JSON.parse(getTodoListApi());
		let newToDoList: ToDOListItem[] = [];
		toDoList.forEach((element: any) => {
			newToDoList.push(
				new ToDOListItem(element.title, element.message, element.id)
			);
		});
		return newToDoList;
	}
}
