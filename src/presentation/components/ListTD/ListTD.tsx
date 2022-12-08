import { ToDoListItem } from "@/domain/models";
import React from "react";
import { ListTDItemContainer } from "../ListTDItem";

interface ListTDInterface {
	toDoList: ToDoListItem[];
	noDataText: string;
}

const ListTD: React.FC<ListTDInterface> = ({ toDoList, noDataText }) => {
	return (
		<div className="text-center pt-5">
			<div className="flex justify-center pb-5">
				<div className="w-full max-w-md border border-white bg-black text-white">
					<h2 className="p-4 text-xl font-bold">YOUR TODOS</h2>
				</div>
			</div>
			<div>
				{toDoList.length > 0 ? (
					toDoList.map((element) => {
						if (element.id){
							return <ListTDItemContainer
								title={element.title}
								description={element.description}
								id={element.id}
								key={element.id}
							/>
						}
					})
				) : (
					<h2 className="font-bold text-lg">{noDataText}</h2>
				)}
			</div>
		</div>
	);
};

export default ListTD;
