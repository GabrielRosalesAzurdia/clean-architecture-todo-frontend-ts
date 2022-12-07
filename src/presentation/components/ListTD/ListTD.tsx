import { ToDoListItem } from "@/domain/models";
import React from "react";
import { ListTDItem } from "../ListTDItem";

interface ListTDInterface {
	toDoList: ToDoListItem[];
	noDataText: string;
}

const ListTD: React.FC<ListTDInterface> = ({ toDoList, noDataText }) => {
	return (
		<div className="text-center pt-5">
			<h2>Your todos are:</h2>
			<div>
				{toDoList.length > 0 ? (
					toDoList.map((element) => (
						<ListTDItem
							title={element.title}
							description={element.description}
							key={element.id}
						/>
					))
				) : (
					<h2>{noDataText}</h2>
				)}
			</div>
		</div>
	);
};

export default ListTD;
