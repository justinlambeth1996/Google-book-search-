// Importing React
import React from "react";

// Exporting Container, Row, and Col components
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Exporting Row component 
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Exporting Col component
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
