import { useState } from "react";
import "./NumberInput.scss";

const NumberInput = ({
  name,
  currency,
  userValue,
  inputValue,
  isDefaultValue,
}: INumberInput) => {
  const [value, setValue] = useState(userValue);

  const numberValueHandler = (e: any) => {
    console.log(e.target.value);
    console.log(userValue);
    setValue(e.target.value);

    inputValue(e.target.value);
  };

  return (
    <span>
      {isDefaultValue && (
        <label htmlFor={name}>
          {currency ? currency[0] : ""}
          <input
            autoFocus
            onChange={numberValueHandler}
            type="number"
            name={name}
            id={name}
            min={0}
            value={value}
            placeholder={name}
          />
        </label>
      )}
      {!isDefaultValue && (
        <input
          autoFocus
          type="number"
          name={name}
          id={name}
          min={0}
          value={userValue ? +userValue : ""}
          placeholder={name}
        />
      )}
    </span>
  );
};

interface INumberInput {
  name: string | undefined;
  currency?: string[] | undefined;
  userValue: string;
  inputValue?: any;
  isDefaultValue: boolean;
}

export default NumberInput;
