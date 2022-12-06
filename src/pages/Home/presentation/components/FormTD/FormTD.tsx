import getToDoListPresenter from "@/presentation/components/ListTD/ListTDPresenter";
import { useAppDispatch, useAppSelector } from "@/presentation/redux/hooks";
import { updateToDoList } from "@/presentation/redux/slices/toDoListSlice";
import React from "react";
import { formTDAddItemPresenter } from "./FormTDPresenter";

/* 

TODO so i get an error because i'm puttng an instance of the TODoListItem in an 
array in the store, so what i'm going to do is get rid of every instance of the 
class and change the blody thing to be an interface so it wont be 
A non-serializable value but a simple dictionary.

*/

interface FormInterface {}

const FormTD: React.FC<FormInterface> = () => {
	const dispatch = useAppDispatch();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		formTDAddItemPresenter(
			e.target.tittle.value,
			e.target.description.value
		);
		let toDoListPresenter = getToDoListPresenter();
		//? Change to match with the usecase from the list
		dispatch(updateToDoList(toDoListPresenter));
	};

	return (
		<div className="flex justify-center pt-6">
			<div className="w-full max-w-xs">
				<form
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
					onSubmit={handleSubmit}
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="tittle"
						>
							Tittle
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="tittle"
							name="tittle"
							type="text"
							placeholder="tittle"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="description"
						>
							Description
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="description"
							name="description"
							type="text"
							placeholder="description"
						/>
					</div>
					<div className="flex flex-col">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Add
						</button>
					</div>
				</form>
				<p className="text-center text-gray-500 text-xs">
					Primer ejemplo Clean Architecture
				</p>
			</div>
		</div>
	);
};

export default FormTD;
