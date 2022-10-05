import { useContext } from "react";
import { QuestionsConstants } from "../../../constants/questions.constants";
import { AppContext } from "../../../Context/AppProvider";
import "./WizardSteps.scss";

const WizardSteps = ({ stepNumberHandler, questionNumber }: IWizardSteps) => {
  const [contextState, dispatch] = useContext(AppContext);
  return (
    <div className="wizardSteps">
      {QuestionsConstants.map((question, i) => {
        if (
          questionNumber === i ||
          !contextState[question.name.toLowerCase()]
        ) {
          return (
            <div
              className="wizardSteps-group"
              key={i}
              onClick={stepNumberHandler.bind(null, i)}
            >
              <div
                /* Filling the background color accordingly to state and selected question */
                className={`wizardSteps-num ${
                  questionNumber === i ? "fill" : ""
                } `}
              >
                {i + 1}
              </div>
              <p className="wizardSteps-group-name">{question.name}</p>
            </div>
          );
        }

        if (contextState[question.name.toLowerCase()]) {
          return (
            <div
              className="wizardSteps-group"
              key={i}
              onClick={stepNumberHandler.bind(null, i)}
            >
              <div className="wizardSteps-num wizardSteps-checkbox">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>{"check"}</title>
                  <desc>{"Created with sketchtool."}</desc>
                  <g
                    id="web-app"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="check" fill="#000000">
                      <polygon
                        id="Shape"
                        points="6 10 4 12 10 18 20 8 18 6 10 14"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <p className="wizardSteps-group-name">{question.name}</p>
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
