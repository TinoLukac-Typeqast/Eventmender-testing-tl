import { useContext, useEffect, useState } from "react";

import { IQuestion } from "../../../constants/questions.constants";
import { AppContext } from "../../../Context/AppProvider";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import RadioBtn from "../../Inputs/RadioBtn/RadioBtn";
import Button from "../../UI/Button/Button";
import {
  removeActionTypeHandler,
  addActionTypeHandler,
} from "../../Utilities/WizardActiontype.utility";
import "./ResultsForm.scss";

interface IResultsForm {
  question: IQuestion;
  setOpenDropdownIndex: any;
}

const ResultsForm = ({ question, setOpenDropdownIndex }: IResultsForm) => {
  const [checkedOption, setOptionChecked] = useState("");
  const [contextState, dispatch] = useContext(AppContext);

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
    dispatch({ type: "ADD_COMPARE_ARRAY", payload: {} });
  };

  useEffect(() => {
    /* Setting the inputs value states depending on contextState */
    if (contextState.appReducer[question.name.toLowerCase()]) {
      setOptionChecked(contextState.appReducer[question.name.toLowerCase()]);
    } else {
      setOptionChecked("");
    }
  }, [contextState]);

  return (
    <form
      action=""
      className="resultsForm"
      onChange={contextStateHandler}
      onSubmit={(e: any) => {
        e.preventDefault();
      }}
    >
      {question.type === "input-options" && (
        <div className="resultsForm-input">
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
        <div className="resultsForm-input">
          <NumberInput
            userValue={
              contextState.appReducer[question.name.toLowerCase()] || false
            }
            name={question.placeholder}
            hasCurrencyDropdownMenu={question.hasCurrencyDropdownMenu || false}
            isResultsWizard={true}
          ></NumberInput>
        </div>
      )}

      <Button onClickFunction={clearInputHandler} type="submit">
        Reset
      </Button>
    </form>
  );
};

export default ResultsForm;
