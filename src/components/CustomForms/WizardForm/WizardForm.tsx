import { useState } from "react";
import "./WizardForm.scss";

const WizardForm = ({
  question,
  queryQuestionsHandler,
  children,
  inputValue,
  questionNumberHandler,
}: IWizardForm) => {
  /* const [inputValue, setInputValue] = useState("") */
  const [isQuestionSkipped, setIsQuestionSkipped] = useState(false);

  const testHandler = (e: any) => {
    e.preventDefault();

    if (question.type === "input-options") {
      queryQuestionsHandler(
        isQuestionSkipped ? question.name : { [question.name]: inputValue }
      );
    }

    if (question.type === "input-number") {
      queryQuestionsHandler(
        isQuestionSkipped ? question.name : { [question.name]: inputValue }
      );
    }

    if (isQuestionSkipped) {
      setIsQuestionSkipped(false);
    }
    questionNumberHandler();
  };

  const skipQuestionHandler = () => {
    setIsQuestionSkipped(true);
  };

  return (
    <form className="wizardform" action="" onSubmit={testHandler}>
      <p className="wizardform--name">{question.name}</p>
      <h2 className="wizardform--question">{question.question}</h2>
      <div
        className={`wizardform--${
          question.type === "input-options" ? "radio" : "number"
        }`}
      >
        {children}
      </div>

      <div className="wizardform--btnGroup">
        <button
          type="submit"
          className="wizardform--btn"
          onClick={skipQuestionHandler}
        >
          Skip
        </button>

        <button type="submit" className="wizardform--btn">
          Next
        </button>
      </div>
    </form>
  );
};

interface IWizardForm {
  question: any;
  queryQuestionsHandler: any;
  children: any;
  inputValue?: any;
  questionNumberHandler: any;
}

export default WizardForm;
