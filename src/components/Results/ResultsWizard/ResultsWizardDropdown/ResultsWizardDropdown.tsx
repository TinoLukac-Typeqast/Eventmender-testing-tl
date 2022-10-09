import { useContext, useEffect, useState } from "react";

import { IQuestion } from "../../../../constants/questions.constants";
import { AppContext } from "../../../../Context/AppProvider";
import NumberInput from "../../../Inputs/NumberInput/NumberInput";
import RadioBtn from "../../../Inputs/RadioBtn/RadioBtn";
import CheckSvgIcon from "../../../UI/CheckSvgIcon/CheckSvgIcon";
import DropdownArrowSvgIcon from "../../../UI/DropdownArrowSvgIcon/DropdownArrowSvgIcon";
import {
  addActionTypeHandler,
  removeActionTypeHandler,
} from "../../../Utilities/WizardActiontype.utility";
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
  const [checkedOption, setOptionChecked] = useState("");
  const [contextState, dispatch] = useContext(AppContext);

  const dropdownMenuHandler = () => {
    if (isDropdownOpen) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  /* Setting which option is selected on Radio group input :: START */
  const handleCheckedOption = (option: string) => {
    setOptionChecked(option);
  };
  /* Setting which option is selected on Radio group input :: END */

  const clearInputHandler = () => {
    const action = {
      type: removeActionTypeHandler(question.name),
    };
    dispatch(action);

    setOpenDropdownIndex(null);
  };

  const contextStateHandler = (e: any) => {
    /* Adding value to the contextState */
    const action = {
      type: addActionTypeHandler(question.name),
      payload: e.target.value,
    };
    dispatch(action);
  };

  useEffect(() => {
    /* Setting the inputs value states depending on contextState */
    if (contextState.appReducer[question.name.toLowerCase()]) {
      setOptionChecked(contextState.appReducer[question.name.toLowerCase()]);
    } else {
      setOptionChecked("");
    }

    if (isDropdownOpenDefault) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [contextState, isDropdownOpenDefault]);

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
        <form
          action=""
          className="resultsWizardDropdown--form"
          onChange={contextStateHandler}
          onSubmit={(e: any) => {
            e.preventDefault();
          }}
        >
          {question.type === "input-options" && (
            <div className="resultsWizardDropdown--form-input">
              {question.options?.map((option, index) => (
                <RadioBtn
                  key={index}
                  option={option}
                  checkedOption={checkedOption}
                  handleCheckedOption={handleCheckedOption}
                  isResultsMenu={true}
                ></RadioBtn>
              ))}
            </div>
          )}

          {question.type === "input-number" && (
            <div className="resultsWizardDropdown--form-input">
              <NumberInput
                userValue={
                  contextState.appReducer[question.name.toLowerCase()] || false
                }
                name={question.placeholder}
                hasCurrencyDropdownMenu={
                  question.hasCurrencyDropdownMenu || false
                }
                isResultsWizard={true}
              ></NumberInput>
            </div>
          )}

          <button
            type="submit"
            onClick={clearInputHandler}
            className="resultsCard-footer--btn"
          >
            Reset
          </button>
        </form>
      )}
    </div>
  );
};

export default ResultsWizardDropdown;
