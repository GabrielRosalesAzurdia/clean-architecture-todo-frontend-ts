import { ToDOListItem } from "@/domain/models/toDoListItem";
import { toDoListRepository } from "@/domain/repositories";

export interface toDoListUseCases {
	getlist(): ToDOListItem[];
}

export class ToDoListUseCasesImpl implements toDoListUseCases {
	repository: toDoListRepository;
	constructor(repository: toDoListRepository) {
		this.repository = repository;
	}

	getlist() {
		return this.repository.getToDoList();
	}
}
