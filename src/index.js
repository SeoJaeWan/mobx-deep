import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "mobx-react";
// import CounterStore from "./stores/counter";
// import MarketStore from "./stores/market";
import RootStore from "./stores";

// const counter = new CounterStore();
// const market = new MarketStore();

const rootStore = new RootStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider
    // counter={counter}
    // market={market}
    {...rootStore}
  >
    <App />
  </Provider>
);
