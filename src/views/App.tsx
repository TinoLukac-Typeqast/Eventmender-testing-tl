import AppProvider from "../Context/AppProvider";
import { combineReducers, state } from "../Context/Reducers";
import { appReducer } from "../Context/Reducers/App/AppReducer";
import "./App.scss";
import WizardPage from "./WizardPage/WizardPage";

const reducers = combineReducers({
  appReducer,
});
function App() {
  return (
    <AppProvider reducer={reducers} state={state}>
      <div className="App">
        <WizardPage></WizardPage>
      </div>
    </AppProvider>
  );
}

export default App;
