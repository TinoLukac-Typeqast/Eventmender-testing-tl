import { useState } from "react";
import { QuestionsConstants } from "../../constants/questions.constants";
import "./Wizard.scss";
import WizardQuestion from "./WizardQuestion/WizardQuestion";
import WizardSteps from "./WizardSteps/WizardSteps";

const Wizard = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const [queryQuestions, setQueryQuestions] = useState<any>({});

  const nextNumberHandler = () => {
    if (QuestionsConstants.length - 1 > questionNumber) {
      setQuestionNumber((prevState) => prevState + 1);
    }

    if (QuestionsConstants.length - 1 === questionNumber) {
      console.log(queryQuestions);
    }
  };

  const stepNumberHandler = (stepNumber: number) => {
    setQuestionNumber(stepNumber);
  };

  const queryQuestionsHandler = (query: any) => {
    setQueryQuestions((prevState: any) => ({
      ...prevState,
      ...query,
    }));
  };

  return (
    <div className="wizard">
      <WizardSteps
        queryQuestions={queryQuestions}
        questionNumber={questionNumber}
        stepNumberHandler={stepNumberHandler}
      ></WizardSteps>
      <WizardQuestion
        question={QuestionsConstants[questionNumber]}
        queryQuestions={queryQuestions}
        queryQuestionsHandler={queryQuestionsHandler}
        questionNumberHandler={nextNumberHandler}
      ></WizardQuestion>
    </div>
  );
};

export default Wizard;
