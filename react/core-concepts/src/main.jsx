import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_LIST } from "./routes";
import App from "./App";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {ROUTES_LIST.map((route, index) => (
          <Route
            key={`${index}-${route.path.substring(1)}`}
            path={route.path}
            Component={() => App(route)}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
