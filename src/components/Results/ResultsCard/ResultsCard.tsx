import { useEffect, useState } from "react";
import CheckSvgIcon from "../../UI/CheckSvgIcon/CheckSvgIcon";
import "./ResultsCard.scss";

interface IResultsCard {
  vendor: any;
  setCompareArray: any;
  compareArray: string[];
}

const ResultsCard = ({
  vendor,
  setCompareArray,
  compareArray,
}: IResultsCard) => {
  const [isChecked, setIsChecked] = useState(false);
  const features = vendor.features.split(";\n");

  const compareHandler = () => {
    if (compareArray?.includes(vendor.name)) {
      setIsChecked(false);
      setCompareArray((prevState: string[]) =>
        prevState.filter((val) => val !== vendor.name)
      );
      return;
    }

    if (compareArray.length === 3 && isChecked === false) {
      alert("max compare items");
      setIsChecked(false);
      return;
    }

    setCompareArray((prevState: string[]) => [...prevState, vendor.name]);
    setIsChecked(true);
  };

  return (
    <article className="resultsCard" key={vendor.id}>
      {/* header :: START */}
      <header className="resultsCard-header">
        <img
          className="resultsCard-header--img"
          src={vendor.logo_urls}
          alt=""
        />

        <div className="resultsCard-header--info">
          <p>{vendor.name}</p>
          <div className="resultsCard-header--info-rating">
            {vendor.rating === "0" && <p>No ratings found</p>}
            {vendor.rating !== "0" && (
              <>
                <p>{vendor.rating}</p>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="#FFC95E"
                    fillRule="evenodd"
                    points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"
                  />
                </svg>
                <p>{`(${vendor.no_of_ratings} ratings)`}</p>
              </>
            )}
          </div>
        </div>
      </header>
      {/* header :: END */}

      <main className="resultsCard-features">
        <h3 className="resultsCard-features--title">Features</h3>
        <div className="resultsCard-features--list">
          {features.map((feature: any, i: number) => {
            if (i < 3) {
              return (
                <div className="resultsCard-features--list-feature" key={i}>
                  <CheckSvgIcon></CheckSvgIcon>

                  <p className="resultsCard-features--list-feature-text">
                    {feature}
                  </p>
                </div>
              );
            }
          })}
          <p className="resultsCard-features-moreText">and many more</p>
        </div>
        <label
          htmlFor={`compare-${vendor.name}`}
          key={vendor.id}
          className="resultsCard-features-checkbox"
        >
          <input
            onChange={compareHandler}
            key={vendor.id}
            type="checkbox"
            name={`compare-${vendor.name}`}
            id={`compare-${vendor.name}`}
            checked={isChecked}
          />
          Compare
        </label>
      </main>

      <footer className="resultsCard-footer">
        <button className="resultsCard-footer--btn">More Info</button>
        <div className="resultsCard-footer--price">
          <p className="resultsCard-footer--price__text">12.567 - 12.567</p>
          <p className="resultsCard-footer--price__estimate">estimated cost</p>
        </div>
      </footer>
    </article>
  );
};

export default ResultsCard;
