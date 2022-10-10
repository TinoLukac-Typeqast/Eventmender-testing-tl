import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import ResultsCard from "../../components/Results/ResultsCard/ResultsCard";

import "./ComparePage.scss";

const ComparePage: React.FC = () => {
	const [{ compareStateObject }] = useContext(AppContext);

	const compareArray = Object.values(compareStateObject);

	return (
		<div className="compare-page">
			{compareArray.map((vendor) => (
				<ResultsCard vendor={vendor}></ResultsCard>
			))}
		</div>
	);
};

export default ComparePage;
