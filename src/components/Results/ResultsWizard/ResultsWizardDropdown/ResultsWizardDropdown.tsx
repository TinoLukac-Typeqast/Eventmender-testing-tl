import { useContext, useEffect, useState } from "react";

import { IQuestion } from "../../../../constants/questions.constants";
import { AppContext } from "../../../../Context/AppProvider";
import ResultsForm from "../../../CustomForms/ResultsForm/ResultsForm";
import CheckSvgIcon from "../../../UI/CheckSvgIcon/CheckSvgIcon";
import DropdownArrowSvgIcon from "../../../UI/DropdownArrowSvgIcon/DropdownArrowSvgIcon";
import "./ResultsWizardDropdown.scss";

interface IResultsWizardDropdown {
  question: IQuestion;
  index: number;
  setOpenDropdownIndex: Function;
  isDropdownOpenDefault: boolean;
}

const ResultsWizardDropdown = ({
  question,
  index,
  setOpenDropdownIndex,
  isDropdownOpenDefault,
}: IResultsWizardDropdown) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isDropdownOpenDefault);
  const [contextState, dispatch] = useContext(AppContext);

  const dropdownMenuHandler = () => {
    if (isDropdownOpen) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  useEffect(() => {
    if (isDropdownOpenDefault) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [isDropdownOpenDefault]);

  return (
    <div className="resultsWizardDropdown">
      <div
        className="resultsWizardDropdown--header"
        onClick={dropdownMenuHandler}
      >
        <div className="resultsWizardDropdown--header-name">
          <p
            className={
              contextState.appReducer[question.name.toLowerCase()]
                ? ""
                : "resultsWizardDropdown--header-name__grey"
            }
          >
            {question.name}
          </p>
          {contextState.appReducer[question.name.toLowerCase()] && (
            <CheckSvgIcon size="20px"></CheckSvgIcon>
          )}
        </div>

        <DropdownArrowSvgIcon
          isDropdownOpen={isDropdownOpen}
          fill={
            contextState.appReducer[question.name.toLowerCase()]
              ? "none"
              : "#919191"
          }
        ></DropdownArrowSvgIcon>
      </div>
      {isDropdownOpen && (
        <ResultsForm
          question={question}
          setOpenDropdownIndex={setOpenDropdownIndex}
        ></ResultsForm>
      )}
    </div>
  );
};

export default ResultsWizardDropdown;
