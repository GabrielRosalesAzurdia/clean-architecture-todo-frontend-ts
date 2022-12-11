import React from "react";
import LoadingSpin from "./LoadingSpin";

interface LoadingSpinLoadingSpinContainerInterface {}

/**
 * Calls the {@link LoadingSpin} component
 * @returns JSX
 */
const LoadingSpinContainer: React.FC<
	LoadingSpinLoadingSpinContainerInterface
> = () => {
	return <LoadingSpin />;
};

export default LoadingSpinContainer;
