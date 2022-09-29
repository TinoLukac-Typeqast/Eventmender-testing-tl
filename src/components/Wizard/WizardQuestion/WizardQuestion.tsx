import { useEffect, useRef, useState } from "react";
import WizardForm from "../../CustomForms/WizardForm/WizardForm";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import RadioBtn from "../../Inputs/RadioBtn/RadioBtn";
import "./WizardQuestion.scss";

const WizardQuestion = ({
  question,
  queryQuestionsHandler,
  questionNumberHandler,
  queryQuestions,
}: IWizardQuestion) => {
  const [checkedOption, setOptionChecked] = useState("");

  const [inputValue, setInputValue] = useState("");

  const handleCheckedOption = (option: string) => {
    setOptionChecked(option);
  };

  useEffect(() => {
    if (queryQuestions[question.name]) {
      setOptionChecked(queryQuestions[question.name]);
      setInputValue(queryQuestions[question.name]);
    }

    if (Object.keys(queryQuestions).includes(question.name)) {
      setOptionChecked(queryQuestions[question.name]);
    } else {
      setOptionChecked("");
      setInputValue("");
    }
  }, [question, queryQuestions]);

  return (
    <div className="wizardQuestion">
      {question.type === "input-options" && (
        <WizardForm
          inputValue={checkedOption}
          question={question}
          queryQuestionsHandler={queryQuestionsHandler}
          questionNumberHandler={questionNumberHandler}
        >
          {question.options?.map((test) => (
            <RadioBtn
              key={test}
              option={test}
              queryQuestions={queryQuestions}
              checkedOption={checkedOption}
              inputValue={setInputValue}
              handleCheckedOption={handleCheckedOption}
            ></RadioBtn>
          ))}
        </WizardForm>
      )}

      {question.type === "input-number" && (
        <WizardForm
          inputValue={inputValue}
          question={question}
          queryQuestionsHandler={queryQuestionsHandler}
          questionNumberHandler={questionNumberHandler}
        >
          <NumberInput
            inputValue={setInputValue}
            userValue={queryQuestions[question.name] || false}
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
  queryQuestionsHandler: any;
  questionNumberHandler: any;
  queryQuestions: any;
}

export default WizardQuestion;
