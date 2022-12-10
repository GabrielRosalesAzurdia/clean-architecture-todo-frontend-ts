import React from "react";
import TitleCard from "./TitleCard";

interface TitleCardConatinerInterface {
	titleText: string;
}

const TitleCardContainer: React.FC<TitleCardConatinerInterface> = ({
	titleText,
}) => {
	return <TitleCard titleText={titleText} />;
};

export default TitleCardContainer;
