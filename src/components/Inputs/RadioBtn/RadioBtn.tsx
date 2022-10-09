import { IOption } from "../../Wizard/WizardQuestion/WizardQuestion";
import "./RadioBtn.scss";

const RadioBtn = ({
  option,
  checkedOption,
  handleCheckedOption,
  isResultsMenu = false,
}: IRadioBtn) => {
  /* cheking if option prop is string or object, if object then it also containts image */
  const optionType = typeof option === "string" ? option : option.text;

  return (
    <label
      htmlFor={optionType}
      /* changing classes if option has images */
      className={`${
        typeof option === "string"
          ? "radioBtn"
          : isResultsMenu
          ? "radioBtn"
          : "radioImages"
      }`}
    >
      <input
        type="radio"
        name={optionType}
        id={optionType}
        value={optionType}
        checked={optionType === checkedOption}
        onChange={handleCheckedOption.bind(null, optionType)}
      />

      {/* choosing label content based on if option has image  */}
      {typeof option === "string" ? (
        option
      ) : isResultsMenu ? (
        option.text
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
  isResultsMenu?: boolean;
}

export default RadioBtn;
