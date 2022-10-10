import AppProvider from "../Context/AppProvider";
import { appReducer } from "../Context/Reducers/App/AppReducer";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import WizardPage from "./WizardPage/WizardPage";
import ResultsPage from "./ResultsPage/ResultsPage";
import { initState } from "../Context/InitialStates/appState";
import combineReducers from "react-combine-reducers";
import { currencyReducer } from "../Context/Reducers/Currency/CurrencyReducer";
import { currencyState } from "../Context/InitialStates/currencyState";
import { compareReducer } from "../Context/Reducers/Compare/CompareReducer";
import { compareState } from "../Context/InitialStates/compareState";
import ComparePage from "./ComparePage/ComparePage";

const [reducerCombined, initialStateCombined] = combineReducers({
  appReducer: [appReducer, initState],
  currency: [currencyReducer, currencyState],
  compareStateObject: [compareReducer, compareState],
});
function App() {
  return (
    <AppProvider reducer={reducerCombined} state={initialStateCombined}>
      <div className="App">
        <Routes>
          <Route path="*" element={<Navigate to="/matchmaking" replace />} />
          <Route path="/matchmaking" element={<WizardPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
