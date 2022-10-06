import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import WizardQuestion from "../../components/Wizard/WizardQuestion/WizardQuestion";
import WizardSteps from "../../components/Wizard/WizardSteps/WizardSteps";
import { QuestionsConstants } from "../../constants/questions.constants";
import { AppContext } from "../../Context/AppProvider";
import "./WizardPage.scss";

const WizardPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [contextState, dispatch] = useContext(AppContext);

  const navigate = useNavigate();

  /* Setting next question :: START */
  const nextNumberHandler = () => {
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
    <div className="wizardPage">
      <div className="wizardPage-steps">
        <WizardSteps
          questionNumber={questionNumber}
          stepNumberHandler={stepNumberHandler}
        ></WizardSteps>
      </div>

      <div className="wizardPage-question">
        <WizardQuestion
          questionNumber={questionNumber}
          question={QuestionsConstants[questionNumber]}
          questionNumberHandler={nextNumberHandler}
        ></WizardQuestion>
      </div>
    </div>
  );
};

export default WizardPage;
