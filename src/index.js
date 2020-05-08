import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { reducers } from "./reducers";

import { createStore } from "redux";
import { Provider } from "react-redux";

import ToDo from "./ToDo";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
