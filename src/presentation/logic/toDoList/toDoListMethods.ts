import { ToDoListRepositoryImpl } from "@/data/repositoriesImpl";
import { ToDoListItem } from "@/domain/models";
import { ToDoListUseCasesImpl } from "@/domain/useCases";

function getListMethod() : ToDoListItem[] {
	let toDoListRepository = new ToDoListRepositoryImpl();
	let toDoListUsecase = new ToDoListUseCasesImpl(toDoListRepository);
	return toDoListUsecase.getlist();
}

export default getListMethod;
