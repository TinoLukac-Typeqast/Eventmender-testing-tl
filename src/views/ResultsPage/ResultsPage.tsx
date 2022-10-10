import { useContext, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ResultsCompare from "../../components/Results/ResultsCompare/ResultsCompare";

import ResultsList from "../../components/Results/ResultsList/ResultsList";
import ResultsWizard from "../../components/Results/ResultsWizard/ResultsWizard";
import { AppContext } from "../../Context/AppProvider";
import "./ResultsPage.scss";

const queryClient = new QueryClient();
const ResultsPage = () => {
  const [{ compareStateObject }] = useContext(AppContext);
  const [compareArray, setCompareArray] = useState<any>(compareStateObject);

  console.log(compareArray);
  return (
    <div className="resultsPage">
      <div className="resultsPage--wizard">
        <ResultsWizard></ResultsWizard>
      </div>
      <div className="resultsPage--list">
        <QueryClientProvider client={queryClient}>
          <ResultsList
            compareArray={compareArray}
            setCompareArray={setCompareArray}
          ></ResultsList>
          {Object.keys(compareArray).length > 0 && (
            <ResultsCompare compareArray={compareArray}></ResultsCompare>
          )}
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default ResultsPage;
