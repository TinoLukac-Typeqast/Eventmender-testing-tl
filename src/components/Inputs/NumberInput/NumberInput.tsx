import "./NumberInput.scss";

const NumberInput = ({
  name,
  currency,
  userValue,
  inputValue,
  isDefaultValue,
}: INumberInput) => {
  const numberValueHandler = (e: any) => {
    e.preventDefault();

    inputValue(e.target.value);
  };

  return (
    <span>
      {currency && <h3>{currency[0]}</h3>}

      {isDefaultValue && (
        <input
          onChange={numberValueHandler}
          type="number"
          name={name}
          id={name}
          min={0}
          defaultValue={userValue ? +userValue : ""}
          placeholder={name}
        />
      )}

      {!isDefaultValue && (
        <input
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
