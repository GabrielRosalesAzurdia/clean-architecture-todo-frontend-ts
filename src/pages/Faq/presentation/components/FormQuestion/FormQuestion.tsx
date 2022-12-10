import React from "react";

interface FormQuestionInterface {
	handleSubmit(e: any): any;
}

const FormQuestion: React.FC<FormQuestionInterface> = ({ handleSubmit }) => {
	return (
		<div className="w-full pt-5">
			<hr />
			<form
				className="bg-white rounded px-8 pt-6 pb-8 mb-4"
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
						type="text"
						placeholder="title"
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="message"
						type="text"
						placeholder="message"
					/>
				</div>
				<div className="flex flex-col">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormQuestion;
