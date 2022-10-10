import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../../Context/AppProvider";
import "./ResultsCompare.scss";
interface IResultsCompare {
	compareArray: any;
}

const ResultsCompare = ({ compareArray }: IResultsCompare) => {
	const [{}, dispatch] = useContext(AppContext);
	const navigate = useNavigate();

	const compareArrayContextHandler = () => {
		dispatch({ type: "ADD_COMPARE_ARRAY", payload: compareArray });
		navigate("/compare");
	};
	return (
		<div className="resultsCompare">
			<div className="resultsCompare--text">
				<p>
					Compare upto 3 <br /> Event Partners
				</p>
			</div>

			<button
				className="resultsCard-footer--btn resultsCompare--btn"
				onClick={compareArrayContextHandler}
			>
				Compare
			</button>
			<div className="resultsCompare--hidden"></div>
		</div>
	);
};

export default ResultsCompare;
