import { useAppSelector } from "@/presentation/redux/hooks";
import React from "react";
import ListTDItem from "../ListTDItem/ListTDItem";

interface ListInterface {}

const ListTD: React.FC<ListInterface> = () => {
	const toDoListState = useAppSelector((state) => state.toDoList);
	return (
		<div>
			<h2>Your todos are:</h2>
			<div>
				{toDoListState.value.map((element) => (
					<ListTDItem title={element.title} description={element.description} />
				))}
			</div>
		</div>
	);
};

export default ListTD;
