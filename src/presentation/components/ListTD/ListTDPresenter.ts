import { ToDoListRepositoryImpl } from "@/data/repositoriesImpl";
import { ToDOListItem } from "@/domain/models/toDoListItem";
import { ToDoListUseCasesImpl } from "@/domain/useCases";

function getToDoListPresenter() : ToDOListItem[] {
	let toDoListRepository = new ToDoListRepositoryImpl();
	let toDoListUsecase = new ToDoListUseCasesImpl(toDoListRepository);
	return toDoListUsecase.getlist();
}

export default getToDoListPresenter;
