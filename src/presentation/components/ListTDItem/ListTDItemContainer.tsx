import { Responses } from "@/domain/models";
import { deleteItemMethod } from "@/presentation/logic";
import { useAppDispatch } from "@/presentation/redux/hooks";
import { deleteToDoListItem } from "@/presentation/redux/slices/toDoListSlice";
import React from "react";
import ListTDItem from "./ListTDItem";

interface ListTDItemContainerInterface {
	title: string;
	description: string;
	id: string;
}

const ListTDItemContainer: React.FC<ListTDItemContainerInterface> = ({
	title,
	description,
	id,
}) => {
	const dispatch = useAppDispatch();

	const handleClick = (id: string) => {
		let deleneteRespone = deleteItemMethod(id);
		if (deleneteRespone == Responses.SUCCESS_DELETE) {
			dispatch(deleteToDoListItem(id));
		}
	};

	return (
		<div>
			<ListTDItem
				title={title}
				description={description}
				id={id}
				handleClick={handleClick}
			/>
		</div>
	);
};

export default ListTDItemContainer;
