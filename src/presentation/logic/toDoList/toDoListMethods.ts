import { ToDoListRepositoryImpl } from "@/data/repositoriesImpl";
import { Failure, ToDoList } from "@/domain/models";
import { getListImpl } from "@/domain/useCases";

/**
 * getListMethod instance
 * Creates an instance of the {@link getListImpl} use case
 * @returns Either a {@link ToDoList} or a LocaLStorageFailure | ServerFailure
 */
async function getListMethod(): Promise<ToDoList | Failure> {
	let toDoListRepository = new ToDoListRepositoryImpl();
	let toDoListUsecase = new getListImpl(toDoListRepository);
	let result = await toDoListUsecase.getlist();
	return result;
}

export default getListMethod;
