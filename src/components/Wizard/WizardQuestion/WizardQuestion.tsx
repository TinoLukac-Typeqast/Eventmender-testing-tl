import { useContext, useEffect, useState } from "react";

import { IQuestion } from "../../../constants/questions.constants";
import { AppContext } from "../../../Context/AppProvider";
import WizardForm from "../../CustomForms/WizardForm/WizardForm";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import RadioBtn from "../../Inputs/RadioBtn/RadioBtn";
import "./WizardQuestion.scss";

const WizardQuestion = ({
  question,
  questionNumberHandler,
  questionNumber,
}: IWizardQuestion) => {
  const [checkedOption, setOptionChecked] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [contextState, dispatch] = useContext(AppContext);

  /* Setting which option is selected on Radio group input :: START */
  const handleCheckedOption = (option: string) => {
    setOptionChecked(option);
  };
  /* Setting which option is selected on Radio group input :: END */

  useEffect(() => {
    /* Setting the initial inputvalue state depending on contextState */
    if (contextState.appReducer[question.name.toLowerCase()]) {
      setOptionChecked(contextState.appReducer[question.name.toLowerCase()]);
      setInputValue(contextState.appReducer[question.name.toLowerCase()]);
    } else {
      setOptionChecked("");
      setInputValue("");
    }
  }, [question, contextState.appReducer]);

  return (
    <div className="wizardQuestion">
      {/* When input is radio group */}
      {question.type === "input-options" && (
        <WizardForm
          key={question.name}
          inputValue={checkedOption}
          question={question}
          questionNumberHandler={questionNumberHandler}
          questionNumber={questionNumber}
        >
          {question.options?.map((option: string | IOption, i) => (
            <RadioBtn
              key={i}
              option={option}
              checkedOption={checkedOption}
              handleCheckedOption={handleCheckedOption}
            ></RadioBtn>
          ))}
        </WizardForm>
      )}

      {/* When input is number input*/}
      {question.type === "input-number" && (
        <WizardForm
          key={question.name}
          inputValue={inputValue}
          question={question}
          questionNumberHandler={questionNumberHandler}
          questionNumber={questionNumber}
        >
          <NumberInput
            inputValue={setInputValue}
            userValue={
              contextState.appReducer[question.name.toLowerCase()] || ""
            }
            name={question.placeholder}
            hasCurrencyDropdownMenu={question.hasCurrencyDropdownMenu || false}
          ></NumberInput>
        </WizardForm>
      )}
    </div>
  );
};

interface IWizardQuestion {
  question: IQuestion;
  questionNumberHandler: any;
  questionNumber: number;
}

export interface IOption {
  text: string;
  image: string;
}

export default WizardQuestion;
