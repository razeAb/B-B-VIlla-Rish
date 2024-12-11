import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global CSS
import App from "./App"; // Main App component
import reportWebVitals from "./reportWebVitals";

// Root rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Main application */}
  </React.StrictMode>
);

// Performance tracking (optional)
reportWebVitals();
