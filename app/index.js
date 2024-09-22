import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";

const bootstrap = () => {
  const container = document.getElementById("my-simple-app");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
};

bootstrap();
