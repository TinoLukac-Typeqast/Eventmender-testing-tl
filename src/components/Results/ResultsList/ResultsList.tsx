import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../../Context/AppProvider";
import { useQuery } from "react-query";
import "./ResultsList.scss";
import ResultsCard from "../ResultsCard/ResultsCard";

interface IResultsList {
  compareArray: any;
  setCompareArray: any;
}

const ResultsList = ({ compareArray, setCompareArray }: IResultsList) => {
  const [contextState, dispatch] = useContext(AppContext);

  const fetchData = async () => {
    console.log("fetchin");
    const currencyExchange = Math.round(
      +contextState.appReducer.budget / contextState.currency.valueToEuro
    );
    console.log(currencyExchange);
    const res: any = await axios.post<any>(
      "https://eventapi.descology.com/api/platform/getPlatforms",
      {
        level_of_support: contextState.appReducer.support,
        price_range:
          contextState.appReducer.budget === "" ? "null" : currencyExchange,
        level_of_customisation: contextState.appReducer.customize,
        estimated_no_of_attendees:
          contextState.appReducer.attendees === ""
            ? "null"
            : +contextState.appReducer.attendees,
        duration_of_the_event: contextState.appReducer.duration,
        experience: contextState.appReducer.experience,
      }
    );
    console.log(res.data.platforms);
    return res.data.platforms;
  };

  const { data, status } = useQuery(
    ["results", contextState.appReducer],
    fetchData,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (status === "loading") {
    return <span className="loader"></span>;
  }

  if (status === "error") {
    return <div>Error 404</div>;
  }

  if (!data) {
    return <div>No Results Found!</div>;
  }

  return (
    <div className="resultsList">
      <h2 className="resultsList-title">{data?.length || 0} matches found</h2>
      <div className="resultsList-items">
        {data.map((item: any, i: number) => (
          <ResultsCard
            key={i}
            vendor={item}
            setCompareArray={setCompareArray}
            compareArray={compareArray}
          ></ResultsCard>
        ))}
      </div>
    </div>
  );
};

export default ResultsList;
