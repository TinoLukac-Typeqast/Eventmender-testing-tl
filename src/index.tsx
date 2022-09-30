import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./views/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
