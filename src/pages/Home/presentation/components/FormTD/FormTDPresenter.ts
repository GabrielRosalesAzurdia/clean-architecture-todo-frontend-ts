import { ToDoListItemRepositoryImpl } from "@/data/repositoriesImpl";
import { ToDoListItem } from "@/domain/models";
import { toDoListItemUseCasesImpl } from "@/domain/useCases";

export function formTDAddItemPresenter(title: string, description: string) {
	let toDoListItemRepository = new ToDoListItemRepositoryImpl();
	let toDoListItemUseCase = new toDoListItemUseCasesImpl(
		toDoListItemRepository
	);
	let newToDoListItem:ToDoListItem = {
		title:title,
		description:description,
	};
	toDoListItemUseCase.addItem(newToDoListItem);
	return newToDoListItem;
}
