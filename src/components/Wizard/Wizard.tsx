import axios from "axios";
import { Fragment, useCallback, useEffect, useState } from "react";
import { QuestionsConstants } from "../../constants/questions.constants";
import "./Wizard.scss";
import WizardQuestion from "./WizardQuestion/WizardQuestion";
import WizardSteps from "./WizardSteps/WizardSteps";

const Wizard = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const [queryQuestions, setQueryQuestions] = useState<any>({});

  const nextNumberHandler = () => {
    if (QuestionsConstants.length > questionNumber) {
      setQuestionNumber((prevState) => prevState + 1);
    }
  };

  const stepNumberHandler = (stepNumber: number) => {
    setQuestionNumber(stepNumber);
  };

  const queryQuestionsHandler = (query: object | string) => {
    if (typeof query === "object") {
      setQueryQuestions((prevState: any) => ({
        ...prevState,
        ...query,
      }));
    }

    if (typeof query === "string") {
      const deletedItemArray = queryQuestions;
      delete deletedItemArray[query];

      setQueryQuestions(deletedItemArray);
    }
  };

  const fetchData = useCallback(async () => {
    const data = await axios.post(
      "https://eventapi.descology.com/api/platform/getPlatforms",
      {
        level_of_support: queryQuestions["Support"] || "",
        price_range: queryQuestions["Budget"]
          ? +queryQuestions["Budget"]
          : "null",
        level_of_customisation: queryQuestions["Customize"] || "",
        estimated_no_of_attendees: queryQuestions["Attendees"]
          ? +queryQuestions["Attendees"]
          : "null",
        duration_of_the_event: queryQuestions["Duration"] || "",
        experience: queryQuestions["Experience"] || "",
      }
    );
    console.log(data);
  }, [queryQuestions]);

  useEffect(() => {
    if (questionNumber > QuestionsConstants.length - 1) {
      fetchData();
    }
  }, [questionNumber]);

  return (
    <div className="wizard">
      <WizardSteps
        queryQuestions={queryQuestions}
        questionNumber={questionNumber}
        stepNumberHandler={stepNumberHandler}
      ></WizardSteps>
      {questionNumber <= QuestionsConstants.length - 1 && (
        <WizardQuestion
          question={QuestionsConstants[questionNumber]}
          queryQuestions={queryQuestions}
          queryQuestionsHandler={queryQuestionsHandler}
          questionNumberHandler={nextNumberHandler}
        ></WizardQuestion>
      )}

      {questionNumber > QuestionsConstants.length - 1 && (
        <div> results: {JSON.stringify(queryQuestions)}</div>
      )}
    </div>
  );
};

export default Wizard;
