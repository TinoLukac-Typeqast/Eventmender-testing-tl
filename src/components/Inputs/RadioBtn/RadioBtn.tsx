import { useEffect } from "react";
import "./RadioBtn.scss";

const RadioBtn = ({
  option,
  queryQuestions,
  checkedOption,
  handleCheckedOption,
  inputValue,
}: IRadioBtn) => {
  return (
    <label htmlFor={option} className="radioBtn">
      <input
        type="radio"
        name={option}
        id={option}
        value={option}
        checked={option === checkedOption}
        onChange={handleCheckedOption.bind(null, option)}
      />{" "}
      {option}
    </label>
  );
};

interface IRadioBtn {
  option: string;
  queryQuestions: any;
  checkedOption: string;
  handleCheckedOption: any;
  inputValue: any;
}

export default RadioBtn;
