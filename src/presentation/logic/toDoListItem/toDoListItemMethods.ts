import { ToDoListItemRepositoryImpl } from "@/data/repositoriesImpl";
import { Failure, ToDoListItem } from "@/domain/models";
import { addItemImpl, deleteItemImpl } from "@/domain/useCases";

export async function addItemMethod(
	title: string,
	description: string
): Promise<ToDoListItem | Failure> {
	let toDoListItemRepository = new ToDoListItemRepositoryImpl();
	let toDoListItemUseCase = new addItemImpl(toDoListItemRepository);
	let newToDoListItem = await toDoListItemUseCase.addItem({
		title: title,
		description: description,
	});
	return newToDoListItem;
}

export async function deleteItemMethod(id: string): Promise<string | Failure> {
	let toDoListItemRepository = new ToDoListItemRepositoryImpl();
	let toDoListItemUseCase = new deleteItemImpl(toDoListItemRepository);
	let response = await toDoListItemUseCase.deleteItem(id);
	return response;
}
