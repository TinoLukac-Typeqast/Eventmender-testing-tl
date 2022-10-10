import { useState } from "react";

import { QuestionsConstants } from "../../../constants/questions.constants";
import ResultsWizardDropdown from "./ResultsWizardDropdown/ResultsWizardDropdown";
import "./ResultsWizard.scss";

const ResultsWizard = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  return (
    <div className="resultsWizard">
      {QuestionsConstants.map((question, index) => (
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
