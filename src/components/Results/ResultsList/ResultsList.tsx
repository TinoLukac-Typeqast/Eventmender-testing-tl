import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { QuestionsConstants } from "../../../constants/questions.constants";
import { AppContext } from "../../../Context/AppProvider";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./ResultsList.scss";
import { isConstructorDeclaration } from "typescript";

const ResultsList = () => {
  /*   const [resultsList, setResultsList] = useState([]);
   */ const [contextState, dispatch] = useContext(AppContext);

  const fetchData = async () => {
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
    /*  console.log(res.data.platforms); */
    return res.data.platforms;
  };

  const { data, status, refetch } = useQuery(
    ["results", contextState],
    fetchData
  );

  /* useEffect(() => {
    refetch();
  }, [contextState]); */

  console.log(data);

  if (status === "loading") {
    return <span className="loader"></span>;
  }

  if (status === "error") {
    return <div>Error 404</div>;
  }

  return (
    <div>
      <h2>Found {data?.length || 0} results</h2>
    </div>
  );
};

export default ResultsList;
