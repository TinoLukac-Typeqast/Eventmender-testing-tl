import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { QuestionsConstants } from "../../../constants/questions.constants";
import { AppContext } from "../../../Context/AppProvider";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./ResultsList.scss";

const ResultsList = () => {
  /*   const [resultsList, setResultsList] = useState([]);
   */ const [contextState, dispatch] = useContext(AppContext);

  const fetchData = async () => {
    const res: any = await axios.post<any>(
      "https://eventapi.descology.com/api/platform/getPlatforms",
      {
        level_of_support: contextState.support,
        price_range: contextState.budget === "" ? "null" : +contextState.budget,
        level_of_customisation: contextState.customize,
        estimated_no_of_attendees:
          contextState.attendees === "" ? "null" : +contextState.attendees,
        duration_of_the_event: contextState.duration,
        experience: contextState.experience,
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
