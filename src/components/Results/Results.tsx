import "./Results.scss";
import ResultsList from "./ResultsList/ResultsList";
import ResultsWizard from "./ResultsWizard/ResultsWizard";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const Results = () => {
  return (
    <div className="results">
      <ResultsWizard></ResultsWizard>
      <div className="results-list">
        <QueryClientProvider client={queryClient}>
          <ResultsList></ResultsList>
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default Results;
