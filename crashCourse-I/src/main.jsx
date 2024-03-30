import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterProvider } from "./context/UserCounter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Due to this wrapping all the components can be accessed in props.child thing */}
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
