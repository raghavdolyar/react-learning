import React from "react";
import ReactDOM from "react-dom/client";

const element = <h2>Hello World</h2>;

// React.createElement("h2", null, "Hello World");

ReactDOM.createRoot(document.getElementById("root")).render(element);
