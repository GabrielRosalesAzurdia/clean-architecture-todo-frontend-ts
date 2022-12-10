import React from "react";

interface TitleCardInterface {
	titleText: string;
}

const TitleCard: React.FC<TitleCardInterface> = ({ titleText }) => {
	return (
		<div className="flex justify-center pb-5">
			<div className="w-full max-w-md border border-white bg-black text-white">
				<h2 className="p-4 text-xl font-bold">{titleText}</h2>
			</div>
		</div>
	);
};

export default TitleCard;
