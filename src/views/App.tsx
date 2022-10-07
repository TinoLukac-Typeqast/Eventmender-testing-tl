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

const [reducerCombined, initialStateCombined] = combineReducers({
  appReducer: [appReducer, initState],
  currency: [currencyReducer, currencyState],
});
function App() {
  return (
    <AppProvider reducer={reducerCombined} state={initialStateCombined}>
      <div className="App">
        <Routes>
          <Route path="*" element={<Navigate to="/matchmaking" replace />} />
          <Route path="/matchmaking" element={<WizardPage />} />
          <Route path="/results" element={<ResultsPage />} />
          {/*     <Route path="/galerija" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} /> */}
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
