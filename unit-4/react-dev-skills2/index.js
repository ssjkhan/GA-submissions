import React from "react";
import reactDom from "react-dom";
import App from "./src/app";

const InitialList = [
	{ name: "Python", level: "2" },
	{ name: "Javascript", level: "2" },
];

reactDom.render(
	<App skillsList={InitialList} />,
	document.getElementById("root")
);
