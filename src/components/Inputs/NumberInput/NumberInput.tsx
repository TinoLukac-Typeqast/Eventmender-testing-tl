import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { currencyData } from "../../../constants/currency.constants";
import { AppContext } from "../../../Context/AppProvider";
import "./NumberInput.scss";

const NumberInput = ({
  name,
  currency,
  userValue,
  inputValue,
  isResultsWizard,
}: INumberInput) => {
  const [contextState, dispatch] = useContext(AppContext);
  const [value, setValue] = useState(userValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currencyRef = useRef<any>(null);

  const numberValueHandler = (e: any) => {
    setValue(e.target.value);
    if (!isResultsWizard) {
      inputValue(e.target.value);
    }
  };

  useEffect(() => {
    const dropdownMenuHandler = (e: any) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.body.addEventListener("click", dropdownMenuHandler);

    return () => {
      // removing event listener when the component unmounts
      document.body.removeEventListener("click", dropdownMenuHandler);
    };
  }, []);

  return (
    <>
      <label htmlFor={name} className="input-group">
        {/* checking if we have dropdown menu for choosing currencies :: START */}
        {currency && (
          <>
            <button
              ref={currencyRef}
              className="currency-dropdown"
              onClick={(e: any) => setIsDropdownOpen((prevState) => !prevState)}
            >
              {`${contextState.currency.symbol}`}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown">
                {currencyData.map((item, i) => (
                  <li
                    key={i}
                    onClick={() =>
                      dispatch({ type: "CURRENCY", payload: currencyData[i] })
                    }
                  >
                    <div className="dropdown-item">
                      <img
                        className="dropdown-item--img"
                        src={item.flagImage}
                        alt=""
                      />
                      <p className="dropdown-item--name">{item.currency}</p>
                      <p className="dropdown-item--symbol">{`(${item.symbol})`}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
        {/* checking if we have dropdown menu for choosing currencies :: END */}
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
    </>
  );
};

interface INumberInput {
  name: string | undefined;
  currency?: string[] | undefined;
  userValue: string;
  inputValue?: any;
  isResultsWizard?: boolean;
}

export default NumberInput;
