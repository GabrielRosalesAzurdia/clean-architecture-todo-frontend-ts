import { toDoListItemApi } from "@/domain/models";

//* Gets the data
export function addItemToListApi(item: toDoListItemApi): string {
	//TODO make a call to the api
	//? since there is not an api YET I implemented
	//? a local storeage mock, this will be only the
	//? api call without logic
	const listLS = localStorage.getItem("todolist");
	if (!listLS) {
		throw console.error("el Local Store fallo en addTodoListItem");
	}
	const list = JSON.parse(listLS);
	list.push(item);
	localStorage.setItem("todolist", JSON.stringify(list));
	return "{succes:200}";
}

//* Gets the data
export function deleteItemFromListApi(id: string): string {
	//TODO make a call to the api
	//? since there is not an api YET I implemented
	//? a local storeage mock, this will be only the
	//? api call without logic
	const listLS = localStorage.getItem("todolist");
	if (!listLS) {
		throw console.error("el Local Store fallo en deleteTodoListItem");
	}
	let list = JSON.parse(listLS);
	let newList = list.filter(
		(element: toDoListItemApi) => element.id != id
	);
	localStorage.setItem("todolist", JSON.stringify(newList));
	return "{succes:200}";
}
