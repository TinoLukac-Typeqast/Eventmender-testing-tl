import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AppContext } from "../../../Context/AppProvider";

interface IResultsCompare {
  compareArray: string[];
}

const ResultsCompare = ({ compareArray }: IResultsCompare) => {
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

  const { data, status } = useQuery(["results", contextState], fetchData, {
    refetchOnWindowFocus: false,
  });
  console.log({ fetched: data });
  return (
    <div className="resultsCompare">
      {compareArray.map((item: string, i: number) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default ResultsCompare;
