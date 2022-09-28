import "./NumberInput.scss";

const NumberInput = ({
  name,
  currency,
  userValue,
  inputValue,
}: INumberInput) => {
  const numberValueHandler = (e: any) => {
    e.preventDefault();
    inputValue(e.target.value);
  };
  return (
    <span>
      {currency && <h3>{currency[0]}</h3>}

      <input
        onChange={numberValueHandler}
        type="number"
        name={name}
        id={name}
        min={0}
        defaultValue={userValue ? +userValue : ""}
        placeholder={name}
      />
    </span>
  );
};

interface INumberInput {
  name: string | undefined;
  currency?: string[] | undefined;
  userValue: string;
  inputValue: any;
}

export default NumberInput;
