import { useContext, useState } from "react";

import { AppContext } from "../../../Context/AppProvider";
import {
  addActionTypeHandler,
  removeActionTypeHandler,
} from "../../Utilities/WizardActiontype.utility";
import "./WizardForm.scss";

const WizardForm = ({
  question,
  children,
  inputValue,
  questionNumberHandler,
  questionNumber,
}: IWizardForm) => {
  const [contextState, dispatch] = useContext(AppContext);

  /* Adding value to the contextState */
  const addQuestionHandler = (e: any) => {
    e.preventDefault();

    const action = {
      type: addActionTypeHandler(question.name),
      payload: inputValue,
    };
    dispatch(action);

    /* Going to next question */
    questionNumberHandler();
  };

  /* Removing value or keeping it default from contextState */
  const skipQuestionHandler = (e: any) => {
    e.preventDefault();

    const action = {
      type: removeActionTypeHandler(question.name),
    };
    dispatch(action);

    /* Going to next question */
    questionNumberHandler();
  };

  return (
    <form
      className="wizardform"
      action=""
      onSubmit={(e: any) => {
        e.preventDefault();
      }}
    >
      <div className="wizardform-step">
        <p className="wizardform-step__p">Step {questionNumber + 1}</p>
        <div className="wizardform-step__empty"></div>
      </div>

      <h2 className="wizardform--question">{question.question}</h2>
      <div
        className={`wizardform--${
          question.type === "input-options"
            ? `${
                typeof question.options[0] === "string"
                  ? "radio"
                  : "radio-images"
              }`
            : "number"
        } `}
      >
        {children}
      </div>

      <div className="wizardform-btnGroup">
        <button
          className="wizardform-btnGroup-btn wizardform-btnGroup-btn__skip"
          onClick={skipQuestionHandler}
        >
          Skip
        </button>

        <button
          type="submit"
          className="wizardform-btnGroup-btn wizardform-btnGroup-btn__next"
          onClick={addQuestionHandler}
        >
          Next
        </button>
      </div>
    </form>
  );
};

interface IWizardForm {
  question: any;
  children: any;
  inputValue?: any;
  questionNumberHandler: any;
  questionNumber: number;
}

export default WizardForm;
