import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppProvider";
import WizardForm from "../../CustomForms/WizardForm/WizardForm";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import RadioBtn from "../../Inputs/RadioBtn/RadioBtn";
import "./WizardQuestion.scss";

const WizardQuestion = ({
  question,
  questionNumberHandler,
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
    /* Setting the inputs value states depending on contextState */
    if (contextState[question.name.toLowerCase()]) {
      setOptionChecked(contextState[question.name.toLowerCase()]);
      setInputValue(contextState[question.name.toLowerCase()]);
    } else {
      setOptionChecked("");
      setInputValue("");
    }
  }, [question, contextState]);

  return (
    <div className="wizardQuestion">
      {question.type === "input-options" && (
        <WizardForm
          inputValue={checkedOption}
          question={question}
          questionNumberHandler={questionNumberHandler}
        >
          {question.options?.map((test) => (
            <RadioBtn
              key={test}
              option={test}
              checkedOption={checkedOption}
              /*               inputValue={setInputValue}
               */ handleCheckedOption={handleCheckedOption}
            ></RadioBtn>
          ))}
        </WizardForm>
      )}

      {question.type === "input-number" && (
        <WizardForm
          inputValue={inputValue}
          question={question}
          questionNumberHandler={questionNumberHandler}
        >
          <NumberInput
            inputValue={setInputValue}
            isDefaultValue={true}
            userValue={contextState[question.name.toLowerCase()] || false}
            name={question.placeholder}
            currency={question.currency}
          ></NumberInput>
        </WizardForm>
      )}
    </div>
  );
};

interface IWizardQuestion {
  question: {
    name: string;
    type: string;
    question: string;
    options?: string[];
    placeholder?: string;
    currency?: string[];
  };
  questionNumberHandler: any;
}

export default WizardQuestion;
