// Importing React & style sheet
import React from "react";
import "./style.css";

// Creating Jumborton component
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

// Exporting Jumbrotron
export default Jumbotron;
