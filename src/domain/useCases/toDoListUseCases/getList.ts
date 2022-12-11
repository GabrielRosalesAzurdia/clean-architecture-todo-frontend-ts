import { ToDoList } from "@/domain/models";
import { Failure } from "@/domain/models";
import { toDoListRepository } from "@/domain/repositories";

/**
 * Contract of the getList use case for {@link ToDoList}
 */
export interface getList {
	/**
	 * Cnntract of the getlist use case method
	 * @return Either a {@link ToDoList} instance or a {@link Failure}
	 */
	getlist(): Promise<ToDoList | Failure>;
}

/**
 * Implementation of the getList use case for {@link ToDoList}
 */
export class getListImpl implements getList {
	/**
	 * Connection with the repository
	 */
	repository: toDoListRepository;

	/**
	 * Creaetes a getListImpl
	 * @param repository - A repository {@link toDoListRepository}, when used give the
	 * implementation of the repository toDoListRepositoryImpl
	 */
	constructor(repository: toDoListRepository) {
		this.repository = repository;
	}

	/**
	 * Implementation of the getlist use case method
	 * @return Either a {@link ToDoList} instance or a {@link Failure}
	 */
	getlist(): Promise<ToDoList | Failure> {
		return this.repository.getToDoList();
	}
}
