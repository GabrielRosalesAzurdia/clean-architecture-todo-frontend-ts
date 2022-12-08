import { ToDoListItemRepositoryImpl } from "@/data/repositoriesImpl";
import { ToDoListItem } from "@/domain/models";
import { toDoListItemUseCasesImpl } from "@/domain/useCases";

export function addItemMethod(title: string, description: string) {
	let toDoListItemRepository = new ToDoListItemRepositoryImpl();
	let toDoListItemUseCase = new toDoListItemUseCasesImpl(
		toDoListItemRepository
	);
	let newToDoListItem: ToDoListItem = toDoListItemUseCase.addItem({
		title: title,
		description: description,
	});
	return newToDoListItem;
}

export function deleteItemMethod(id: string) {
	let toDoListItemRepository = new ToDoListItemRepositoryImpl();
	let toDoListItemUseCase = new toDoListItemUseCasesImpl(
		toDoListItemRepository
	);
	return toDoListItemUseCase.deleteItem(id);
}
