import React from "react";

interface QuestionItemInterface {
	title:string
	text:string
}

const QuestionItem: React.FC<QuestionItemInterface> = ({title,text}) => {
	return <div className="shadow-lg p-5 text-left">
		<h3 className="font-bold text-base">
			{title}
		</h3>
		<br />
		<p>
			{text}
		</p>
	</div>;
};

export default QuestionItem;
