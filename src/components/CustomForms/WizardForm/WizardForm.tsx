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
}: IWizardForm) => {
  const [isQuestionSkipped, setIsQuestionSkipped] = useState(false);
  const [contextState, dispatch] = useContext(AppContext);

  const contextStateHandler = (e: any) => {
    e.preventDefault();

    if (!isQuestionSkipped) {
      const action = {
        type: addActionTypeHandler(question.name),
        payload: inputValue,
      };
      dispatch(action);
    }

    if (isQuestionSkipped) {
      const action = {
        type: removeActionTypeHandler(question.name),
      };
      dispatch(action);
      setIsQuestionSkipped(false);
    }

    questionNumberHandler();
  };

  return (
    <form className="wizardform" action="" onSubmit={contextStateHandler}>
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
          onClick={() => {
            setIsQuestionSkipped(true);
          }}
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
  children: any;
  inputValue?: any;
  questionNumberHandler: any;
}

export default WizardForm;
