import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { QuestionsConstants } from "../../constants/questions.constants";
import { AppContext } from "../../Context/AppProvider";
import "./Wizard.scss";
import WizardQuestion from "./WizardQuestion/WizardQuestion";
import WizardSteps from "./WizardSteps/WizardSteps";

const Wizard = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [contextState, dispatch] = useContext(AppContext);
  console.log(contextState);

  /* Setting next question :: START */
  const nextNumberHandler = () => {
    if (QuestionsConstants.length > questionNumber) {
      setQuestionNumber((prevState) => prevState + 1);
    }
  };

  const stepNumberHandler = (stepNumber: number) => {
    setQuestionNumber(stepNumber);
  };
  /* Setting next question :: END */

  const fetchData = useCallback(async () => {
    const data = await axios.post(
      "https://eventapi.descology.com/api/platform/getPlatforms",
      {
        level_of_support: contextState.support,
        price_range: contextState.budget ? +contextState.budget : "null",
        level_of_customisation: contextState.customization,
        estimated_no_of_attendees: contextState.attendees
          ? +contextState.attendees
          : "null",
        duration_of_the_event: contextState.duration,
        experience: contextState.experience,
      }
    );
    console.log(data);
  }, [contextState]);

  useEffect(() => {
    if (questionNumber > QuestionsConstants.length - 1) {
      fetchData();
    }
  }, [questionNumber]);

  return (
    <div className="wizard">
      <WizardSteps
        questionNumber={questionNumber}
        stepNumberHandler={stepNumberHandler}
      ></WizardSteps>
      {questionNumber <= QuestionsConstants.length - 1 && (
        <WizardQuestion
          question={QuestionsConstants[questionNumber]}
          questionNumberHandler={nextNumberHandler}
        ></WizardQuestion>
      )}

      {/* {questionNumber > QuestionsConstants.length - 1 && (
        <div> results: {JSON.stringify(queryQuestions)}</div>
      )} */}
    </div>
  );
};

export default Wizard;
