import { ToDoListItem } from "@/domain/models";
import { toDoListRepository } from "@/domain/repositories";

//* Definition of the UseCase, what it needs and what will return
export interface toDoListUseCases {
	getlist(): ToDoListItem[];
}

//* Implementation of the UseCase Using the Repository
export class ToDoListUseCasesImpl implements toDoListUseCases {
	repository: toDoListRepository;

	constructor(repository: toDoListRepository) {
		this.repository = repository;
	}

	getlist() {
		return this.repository.getToDoList();
	}
}
