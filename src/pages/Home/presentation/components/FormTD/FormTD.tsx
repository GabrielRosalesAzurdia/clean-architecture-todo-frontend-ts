import React from "react";

interface FormInterface {
	/**
	 * Handles the form submit event from the form
	 * @param e - The submit event
	 */
	handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
	/**
	 * Handles the change event from the form fields
	 * @param e - The change event
	 */
	handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
	/**
	 * value for the title todo form field
	 */
	title: string;
	/**
	 * value for the description todo form field
	 */
	description: string;
}

/**
 * Creates a form to add items to the to do list
 * @returns JSX
 */
const FormTD: React.FC<FormInterface> = ({
	handleSubmit,
	handleChange,
	title,
	description,
}) => {
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
							htmlFor="title"
						>
							Title
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="title"
							name="title"
							type="text"
							placeholder="title"
							onChange={handleChange}
							value={title}
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
							onChange={handleChange}
							value={description}
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
