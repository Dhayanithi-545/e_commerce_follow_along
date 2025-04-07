import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import App from "./App.jsx";
import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)