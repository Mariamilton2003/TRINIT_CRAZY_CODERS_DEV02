import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
// import store from "./Redux/app/store";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ApiProvider store={store}>
  <App />
  // </ApiProvider>
);
