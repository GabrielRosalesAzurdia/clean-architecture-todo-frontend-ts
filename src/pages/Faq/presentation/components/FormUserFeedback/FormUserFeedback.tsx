import { Question } from "@/pages/Faq/domain/models";
import { LoadingSpinContainer } from "@/presentation/components";
import React from "react";

interface FormQuestionInterface {
	/**
	 * Handles the form submit event from the form
	 * @param e - The submit event
	 */
	handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
	/**
	 * List of questions to put in the dropdown
	 */
	questionList: Question[];
	/**
	 * value for the message field of the form
	 */
	messageField: string;
	/**
	 * Handles the change event from the form field
	 * @param e - The change event
	 */
	handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
	/**
	 * Flag to know if its loading data
	 */
	loading: boolean;
}

const FormQuestion: React.FC<FormQuestionInterface> = ({
	handleSubmit,
	questionList,
	messageField,
	handleChange,
	loading,
}) => {
	return (
		<div className="w-full pt-5">
			<hr />
			<form
				className="bg-white rounded px-8 pt-6 pb-8 mb-4"
				onSubmit={handleSubmit}
			>
				<div className="mb-4">
					<label
						htmlFor="title"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Choose a Question:
					</label>
					<select
						id="titles"
						name="title"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					>
						{questionList.length > 0 ? (
							questionList.map((element, index) => {
								return (
									<option key={index} value={element.title}>
										{element.title}
									</option>
								);
							})
						) : (
							<p>There is no Frequent Asked Questions</p>
						)}
					</select>
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
						value={messageField}
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-12 m-h-12"
						type="submit"
					>
						{loading ? <LoadingSpinContainer /> : "Send"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormQuestion;
