import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
