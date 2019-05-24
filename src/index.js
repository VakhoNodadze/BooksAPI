import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Books from "./components/Books";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "../src/reducers/reducer";
// import store from "./store/store";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];
const store = createStore(
  RootReducer,
  enhancer(applyMiddleware(...middleware))
);

// store.subscribe = () => {
//   console.log("index js subscribe", store.getState());
// };
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
