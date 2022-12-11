import React from "react";
import TitleCard from "./TitleCard";

interface TitleCardConatinerInterface {
	/**
	 * Title of the card
	 */
	titleText: string;
}

/**
 * Calls the {@link TitleCard} component
 * @returns JSX
 */
const TitleCardContainer: React.FC<TitleCardConatinerInterface> = ({
	titleText,
}) => {
	return <TitleCard titleText={titleText} />;
};

export default TitleCardContainer;
