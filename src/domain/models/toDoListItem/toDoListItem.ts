//* To do list item structure

//* Id is optional since the id is not given at the frontend but
//* when returned from the backend
export interface ToDoListItem {
	title: string;
	description: string;
	id?: string;
}
