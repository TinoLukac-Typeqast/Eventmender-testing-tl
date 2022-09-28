import "./NumberInput.scss";

const NumberInput = ({ name, currency, userValue }: INumberInput) => {
  return (
    <span>
      {currency && <h3>{currency[0]}</h3>}

      <input
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
}

export default NumberInput;
