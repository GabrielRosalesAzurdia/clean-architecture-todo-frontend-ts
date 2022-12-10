import { ToDoList } from "@/domain/models";
import { Failure } from "@/domain/models";
import { toDoListRepository } from "@/domain/repositories";

export interface getList {
	getlist(): Promise<ToDoList | Failure>;
}

export class getListImpl implements getList {
	repository: toDoListRepository;

	constructor(repository: toDoListRepository) {
		this.repository = repository;
	}

	getlist(): Promise<ToDoList | Failure> {
		return this.repository.getToDoList();
	}
}
