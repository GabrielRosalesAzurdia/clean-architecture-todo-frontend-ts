import { ToDoListItem } from "@/domain/models";
import React from "react";
import { ListTDItemContainer } from "../ListTDItem";
import { LoadingSpinContainer } from "../LoadingSpin";
import TitleCardContainer from "../TitleCard/TitleCardCotainer";

interface ListTDInterface {
	toDoList: ToDoListItem[];
	noDataText: string;
	loading: boolean;
}

const ListTD: React.FC<ListTDInterface> = ({
	toDoList,
	noDataText,
	loading,
}) => {
	return (
		<div className="text-center pt-5">
			<TitleCardContainer titleText={"YOUR TODOS"} />
			<div>
				{!loading ? (
					toDoList.length > 0 ? (
						toDoList.map((element) => {
							if (element.id) {
								return (
									<ListTDItemContainer
										title={element.title}
										description={element.description}
										id={element.id}
										key={element.id}
									/>
								);
							}
						})
					) : (
						<h2 className="font-bold text-lg">{noDataText}</h2>
					)
				) : (
					<LoadingSpinContainer />
				)}
			</div>
		</div>
	);
};

export default ListTD;
