import { useContext } from "react";

import { AppContext } from "../../../Context/AppProvider";
import "./ResultsCompare.scss";
interface IResultsCompare {
  compareArray: any;
}

const ResultsCompare = ({ compareArray }: IResultsCompare) => {
  const [{ compareStateObject }, dispatch] = useContext(AppContext);

  console.log(compareStateObject);

  const compareArrayContextHandler = () => {
    dispatch({ type: "ADD_COMPARE_ARRAY", payload: compareArray });
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
