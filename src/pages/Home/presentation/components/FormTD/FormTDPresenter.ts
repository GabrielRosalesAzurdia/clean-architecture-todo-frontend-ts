import { ToDoListItemRepositoryImpl } from "@/data/repositoriesImpl";
import { ToDOListItem } from "@/domain/models/toDoListItem";
import { toDoListItemUseCasesImpl } from "@/domain/useCases";

export function formTDAddItemPresenter(title: string, description: string) {
	let toDoListItemRepository = new ToDoListItemRepositoryImpl();
	let toDoListItemUseCase = new toDoListItemUseCasesImpl(
		toDoListItemRepository
	);
	let newToDoListItem = new ToDOListItem(
		title,
		description,
		Math.floor(Math.random() * 1000)
	);
	toDoListItemUseCase.addItem(newToDoListItem);
	return newToDoListItem;
}
