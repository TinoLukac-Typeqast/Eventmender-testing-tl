import { useContext, useState } from "react";
import { QuestionsConstants } from "../../constants/questions.constants";
import { AppContext } from "../../Context/AppProvider";
import "./Wizard.scss";
import WizardQuestion from "./WizardQuestion/WizardQuestion";
import WizardSteps from "./WizardSteps/WizardSteps";
import { useNavigate } from "react-router-dom";

const Wizard = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [contextState, dispatch] = useContext(AppContext);

  const navigate = useNavigate();
  console.log(contextState);

  /* Setting next question :: START */
  const nextNumberHandler = async () => {
    if (QuestionsConstants.length - 1 > questionNumber) {
      setQuestionNumber((prevState) => prevState + 1);
    }

    if (questionNumber === QuestionsConstants.length - 1) {
      navigate("/results");
    }
  };

  const stepNumberHandler = (stepNumber: number) => {
    setQuestionNumber(stepNumber);
  };
  /* Setting next question :: END */

  return (
    <div className="wizard">
      <WizardSteps
        questionNumber={questionNumber}
        stepNumberHandler={stepNumberHandler}
      ></WizardSteps>
      <WizardQuestion
        question={QuestionsConstants[questionNumber]}
        questionNumberHandler={nextNumberHandler}
      ></WizardQuestion>
    </div>
  );
};

export default Wizard;
