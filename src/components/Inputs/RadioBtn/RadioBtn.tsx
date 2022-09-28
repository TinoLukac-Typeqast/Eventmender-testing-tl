import { useEffect } from "react";
import "./RadioBtn.scss";

const RadioBtn = ({
  option,
  checkedOption,
  handleCheckedOption,
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
  checkedOption: string;
  handleCheckedOption: any;
}

export default RadioBtn;
