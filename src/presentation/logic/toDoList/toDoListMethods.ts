import { ToDoListRepositoryImpl } from "@/data/repositoriesImpl";
import { Failure, ToDoListItem } from "@/domain/models";
import { getListImpl } from "@/domain/useCases";

async function getListMethod(): Promise<ToDoListItem[]|Failure> {
	let toDoListRepository = new ToDoListRepositoryImpl();
	let toDoListUsecase = new getListImpl(toDoListRepository);
	let result = await toDoListUsecase.getlist();
	return result;
}

export default getListMethod;
