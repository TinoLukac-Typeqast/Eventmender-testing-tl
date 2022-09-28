import { useEffect, useRef, useState } from "react";
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

  const handleCheckedOption = (option: string) => {
    setOptionChecked(option);
  };

  const testHandler = (e: any) => {
    queryQuestionsHandler({ [question.name]: e.target.value });
  };

  useEffect(() => {
    if (queryQuestions[question.name]) {
      setOptionChecked(queryQuestions[question.name]);
      console.log(true);
    }
  }, [question]);

  return (
    <div className="wizardQuestion">
      <form
        className="wizardQuestion-form"
        action=""
        onChange={testHandler}
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="wizardQuestion-form--name">{question.name}</p>
        <h2 className="wizardQuestion-form--question">{question.question}</h2>

        {question.type === "input-options" && (
          <div className="wizardQuestion-form--radio">
            {question.options?.map((test) => (
              <RadioBtn
                key={test}
                option={test}
                checkedOption={checkedOption}
                handleCheckedOption={handleCheckedOption}
              ></RadioBtn>
            ))}
          </div>
        )}

        {question.type === "input-number" && (
          <div className="wizardQuestion-form--number">
            <NumberInput
              userValue={queryQuestions[question.name] || false}
              name={question.placeholder}
              currency={question.currency}
            ></NumberInput>
          </div>
        )}

        <button
          className="wizardQuestion-form--btn"
          onClick={questionNumberHandler}
        >
          Next
        </button>
      </form>
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
