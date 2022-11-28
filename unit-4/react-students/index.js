import React from "react";
import reactDom from "react-dom/client";
import App from "./src/app";

const container = document.getElementById("root");
const root = reactDom.createRoot(container);
root.render(<App></App>);
