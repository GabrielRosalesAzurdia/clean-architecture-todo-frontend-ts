import { QuestionList } from "@/pages/Faq/domain/models";
import React from "react";
import { QuestionItem } from "../QuestionItem";

interface QuestionInterface {
	questionList:QuestionList
}

const Question: React.FC<QuestionInterface> = ({questionList}) => {
	return (
		<section className="text-center pt-5">
			<div className="flex justify-center pb-5">
				<div className="w-full max-w-md border border-white bg-black text-white">
					<h2 className="p-4 text-xl font-bold">Frequent Ask Questions</h2>
				</div>
			</div>
			<div>
				{questionList.value.map((element,index)=>{
					return <QuestionItem key={index} title={element.title} text={element.text} />
				})}
			</div>
		</section>
	);
};

export default Question;
