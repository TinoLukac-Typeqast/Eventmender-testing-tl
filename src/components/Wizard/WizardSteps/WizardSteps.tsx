import { useContext } from "react";
import { QuestionsConstants } from "../../../constants/questions.constants";
import { AppContext } from "../../../Context/AppProvider";
import "./WizardSteps.scss";

const WizardSteps = ({ stepNumberHandler, questionNumber }: IWizardSteps) => {
  const [contextState, dispatch] = useContext(AppContext);
  return (
    <div className="wizardSteps">
      {QuestionsConstants.map((question, i) => (
        <div
          key={i}
          className={`wizardSteps-num ${questionNumber === i && "round"} ${
            contextState[question.name.toLowerCase()] ? "fill" : ""
          }`}
          onClick={stepNumberHandler.bind(null, i)}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

interface IWizardSteps {
  stepNumberHandler: any;
  questionNumber: number;
}

export default WizardSteps;
