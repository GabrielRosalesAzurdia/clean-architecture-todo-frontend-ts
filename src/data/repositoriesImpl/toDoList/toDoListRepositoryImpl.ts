import { getTodoListApi } from "@/data/services";
import { ToDoListItem } from "@/domain/models";
import { toDoListRepository } from "@/domain/repositories";

//* Implements the repository with actual use of the services and adaptation
//* of the data
export class ToDoListRepositoryImpl implements toDoListRepository {
	getToDoList() {
		let toDoList = JSON.parse(getTodoListApi());
		let newToDoList: ToDoListItem[] = [];
		toDoList.forEach((element: any) => {
			newToDoList.push({
				title: element.title,
				description: element.message,
				id: element.id,
			});
		});
		return newToDoList;
	}
}
