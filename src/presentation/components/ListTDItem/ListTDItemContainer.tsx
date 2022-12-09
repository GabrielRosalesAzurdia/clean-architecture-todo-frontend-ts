import { Failure, Responses } from "@/domain/models";
import { deleteItemMethod } from "@/presentation/logic";
import { useAppDispatch } from "@/presentation/redux/hooks";
import {
	turnOffLoading,
	turnOnLoading,
} from "@/presentation/redux/slices/loadingSlice";
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
		dispatch(turnOnLoading());
		deleteItemMethod(id).then((response) => {
			if (response instanceof Failure) {
				console.log("no pues salio failurse en ListTDItem");
				return;
			}
			if (response == Responses.SUCCESS_DELETE) {
				dispatch(deleteToDoListItem(id));
			}
			dispatch(turnOffLoading());
		});
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
