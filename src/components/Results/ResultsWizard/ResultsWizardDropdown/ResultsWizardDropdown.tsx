import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../Context/AppProvider";
import NumberInput from "../../../Inputs/NumberInput/NumberInput";
import RadioBtn from "../../../Inputs/RadioBtn/RadioBtn";
import {
  addActionTypeHandler,
  removeActionTypeHandler,
} from "../../../Utilities/WizardActiontype.utility";
import { IOption } from "../../../Wizard/WizardQuestion/WizardQuestion";
import "./ResultsWizardDropdown.scss";

interface IResultsWizardDropdown {
  question: {
    name: string;
    type: string;
    question: string;
    options?: string[] | IOption[];
    placeholder?: string;
    currency?: string[];
  };
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
  /*   const [inputValue, setInputValue] = useState("");
   */ const [contextState, dispatch] = useContext(AppContext);

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
    if (contextState[question.name.toLowerCase()]) {
      setOptionChecked(contextState[question.name.toLowerCase()]);
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
        <h3>{question.name}</h3>
        <h3>{"<"}</h3>
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
                ></RadioBtn>
              ))}
            </div>
          )}

          {question.type === "input-number" && (
            <div className="resultsWizardDropdown--form-input">
              <NumberInput
                isDefaultValue={false}
                userValue={contextState[question.name.toLowerCase()] || false}
                name={question.placeholder}
                currency={question.currency}
              ></NumberInput>
            </div>
          )}

          <button type="submit" onClick={clearInputHandler}>
            Clear
          </button>
        </form>
      )}
    </div>
  );
};

export default ResultsWizardDropdown;
