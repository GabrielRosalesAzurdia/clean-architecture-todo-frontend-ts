export function getTodoListApi(): string {
	//TODO make a call to the api
	//? since there is not an api YET I implemented
	//? a local storeage mock, this will be only the
	//? api call without logic
	let testIfItemExists = localStorage.getItem("todolist");
	if (!testIfItemExists) {
		localStorage.setItem("todolist", "[]");
		return "[]";
	}
	return testIfItemExists;
}
