import { useAppDispatch, useAppSelector } from "@/presentation/redux/hooks";
import { updateToDoList } from "@/presentation/redux/slices/toDoListSlice";
import React, { useEffect } from "react";
import ListTDItem from "../ListTDItem/ListTDItem";
import getToDoListPresenter from "./ListTDPresenter";

interface ListInterface {}

const ListTD: React.FC<ListInterface> = () => {
	const toDoListState = useAppSelector((state) => state.toDoList.value);
	const dispatch = useAppDispatch();

	useEffect(() => {
		let toDoListPresenter = getToDoListPresenter();
		dispatch(updateToDoList(toDoListPresenter));
	}, []);

	const noDataText = "Everything is clear ; )";

	return (
		<div className="text-center pt-5">
			<h2>Your todos are:</h2>
			<div>
				{toDoListState.length > 0 ? (
					toDoListState.map((element) => (
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
