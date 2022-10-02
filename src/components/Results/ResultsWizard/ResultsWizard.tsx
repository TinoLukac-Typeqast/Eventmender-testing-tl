import { useContext, useState } from "react";
import { QuestionsConstants } from "../../../constants/questions.constants";
import { AppContext } from "../../../Context/AppProvider";
import "./ResultsWizard.scss";
import ResultsWizardDropdown from "./ResultsWizardDropdown/ResultsWizardDropdown";

const questions = QuestionsConstants;

const ResultsWizard = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [contextState, dispatch] = useContext(AppContext);

  return (
    <div className="resultsWizard">
      {questions.map((question, index) => (
        <ResultsWizardDropdown
          key={index}
          setOpenDropdownIndex={setOpenDropdownIndex}
          isDropdownOpenDefault={openDropdownIndex === index ? true : false}
          index={index}
          question={question}
        ></ResultsWizardDropdown>
      ))}
    </div>
  );
};

export default ResultsWizard;
