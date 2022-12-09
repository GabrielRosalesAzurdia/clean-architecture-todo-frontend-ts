import { ToDoListItem } from "@/domain/models";
import { Failure } from "@/domain/models";
import { toDoListRepository } from "@/domain/repositories";

export interface getList {
	getlist(): Promise<ToDoListItem[] | Failure>;
}

export class getListImpl implements getList {
	repository: toDoListRepository;

	constructor(repository: toDoListRepository) {
		this.repository = repository;
	}

	getlist(): Promise<ToDoListItem[] | Failure> {
		return this.repository.getToDoList();
	}
}
