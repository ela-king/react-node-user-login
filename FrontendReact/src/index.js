
//import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import stores from './stores'
 ReactDOM.render(
    <Provider store={stores}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,document.getElementById("root")
);

reportWebVitals();
