import { QuestionsConstants } from "../../../constants/questions.constants";
import "./WizardSteps.scss";

const WizardSteps = ({
  stepNumberHandler,
  questionNumber,
  queryQuestions,
}: IWizardSteps) => {
  return (
    <div className="wizardSteps">
      {QuestionsConstants.map((question, i) => (
        <>
          {/* <div>
            <p>{question.name}</p>
          </div> */}
          <div
            key={i}
            className={`wizardSteps-num ${questionNumber === i && "round"} ${
              queryQuestions[question.name] ? "fill" : ""
            }`}
            onClick={stepNumberHandler.bind(null, i)}
          >
            {i + 1}
          </div>
        </>
      ))}
    </div>
  );
};

interface IWizardSteps {
  stepNumberHandler: any;
  questionNumber: number;
  queryQuestions: any;
}

export default WizardSteps;
