import React from "react";
import ReactDOM from "react-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/backButton.css";
import App from "../App";

export default function BackButton() {
  function navigateToStartScreen() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
  return (
    <button className="backButton" onClick={() => navigateToStartScreen()}>
      <FaArrowLeft /> <span>Back to Menu</span>
    </button>
  );
}
