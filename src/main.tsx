import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={"/apod-nasa-version-2023/"}>
    <Route element={<App />} path="/apod-nasa-version-2023" />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
