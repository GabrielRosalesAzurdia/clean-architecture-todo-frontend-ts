import { LocaLStorageFailure, Responses, ServerFailure } from "@/domain/models";
import { deleteItemMethod } from "@/presentation/logic";
import { useAppDispatch } from "@/presentation/redux/hooks";
import {
	turnOffformTDLoading,
	turnOnformTDLoading,
} from "@/presentation/redux/slices/loadingSlice";
import { deleteToDoListItem } from "@/presentation/redux/slices/toDoListSlice";
import React from "react";
import { toast } from "react-hot-toast";
import ListTDItem from "./ListTDItem";

interface ListTDItemContainerInterface {
	/**
	 * Title of the to do list item
	 */
	title: string;
	/**
	 * Description of the to do list item
	 */
	description: string;
	/**
	 * Id of the to do list item
	 */
	id: string;
}

/**
 * Manages state and functions, calls the {@link ListTDItem} component
 * @returns JSX
 */
const ListTDItemContainer: React.FC<ListTDItemContainerInterface> = ({
	title,
	description,
	id,
}) => {
	const dispatch = useAppDispatch();

	/**
	 * Handles the button to delete an item from the to do list
	 * @param id - Id of the item to delete
	 */
	const handleClick = (id: string): void => {
		dispatch(turnOnformTDLoading());
		deleteItemMethod(id).then((response) => {
			if (response instanceof ServerFailure) {
				toast.error("A Server Failure happened on the list item :(");
				return;
			} else if (response instanceof LocaLStorageFailure) {
				toast.error("A Local Failure happened on the list item :(");
				return;
			}
			if (response == Responses.SUCCESS_DELETE) {
				dispatch(deleteToDoListItem(id));
			}
			dispatch(turnOffformTDLoading());
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
