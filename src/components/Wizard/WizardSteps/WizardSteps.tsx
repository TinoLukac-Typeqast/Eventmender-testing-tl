import { useContext } from "react";

import { QuestionsConstants } from "../../../constants/questions.constants";
import { AppContext } from "../../../Context/AppProvider";
import CheckSvgIcon from "../../UI/CheckSvgIcon/CheckSvgIcon";
import "./WizardSteps.scss";

const WizardSteps = ({ stepNumberHandler, questionNumber }: IWizardSteps) => {
  const [contextState, dispatch] = useContext(AppContext);

  return (
    <div className="wizardSteps">
      {QuestionsConstants.map((question, i) => {
        /* if question in context is empty */
        if (
          questionNumber === i ||
          !contextState.appReducer[question.name.toLowerCase()]
        ) {
          return (
            <div
              className="wizardSteps-group"
              key={i}
              onClick={stepNumberHandler.bind(null, i)}
            >
              <div
                /* Filling the background color when question is selected */
                className={`wizardSteps-group--num ${
                  questionNumber === i ? "fill" : ""
                } `}
              >
                {i + 1}
              </div>
              <p className="wizardSteps-group--name">{question.name}</p>
            </div>
          );
        }

        /* if question in context has a choosen anwser already then number will be checked */
        if (contextState.appReducer[question.name.toLowerCase()]) {
          return (
            <div
              className="wizardSteps-group"
              key={i}
              onClick={stepNumberHandler.bind(null, i)}
            >
              <div className="wizardSteps-group--num wizardSteps-checkbox">
                <CheckSvgIcon size="24px"></CheckSvgIcon>
              </div>
              <p className="wizardSteps-group--name">{question.name}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

interface IWizardSteps {
  stepNumberHandler: any;
  questionNumber: number;
}

export default WizardSteps;
