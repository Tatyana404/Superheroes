import { Provider } from "react-redux";
import { render } from "react-dom";
import { StrictMode } from "react";
import store from "./store";
import App from "./App";
import "./index.css";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
