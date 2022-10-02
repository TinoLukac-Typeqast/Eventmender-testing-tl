import AppProvider from "../Context/AppProvider";
import { combineReducers, state } from "../Context/Reducers";
import { appReducer } from "../Context/Reducers/App/AppReducer";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import WizardPage from "./WizardPage/WizardPage";
import ResultsPage from "./ResultsPage/ResultsPage";

const reducers = combineReducers({
  appReducer,
});
function App() {
  return (
    <AppProvider reducer={reducers} state={state}>
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
