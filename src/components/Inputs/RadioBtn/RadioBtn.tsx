import { IOption } from "../../Wizard/WizardQuestion/WizardQuestion";
import "./RadioBtn.scss";

const RadioBtn = ({
  option,
  checkedOption,
  handleCheckedOption,
}: IRadioBtn) => {
  const optionType = typeof option === "string" ? option : option.text;

  return (
    <label
      htmlFor={optionType}
      className={`${typeof option === "string" ? "radioBtn" : "radioImages"}`}
    >
      <input
        type="radio"
        name={optionType}
        id={optionType}
        value={optionType}
        checked={optionType === checkedOption}
        onChange={handleCheckedOption.bind(null, optionType)}
      />
      {typeof option === "string" ? (
        option
      ) : (
        <img className="radioBtn-img" src={option.image} alt={option.text} />
      )}
    </label>
  );
};

interface IRadioBtn {
  option: string | IOption;
  checkedOption: string;
  handleCheckedOption: any;
}

export default RadioBtn;
