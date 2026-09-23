import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
const app = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// Production HTML is prerendered, so attach to it instead of rendering from scratch.
if (root.hasChildNodes()) {
	ReactDOM.hydrateRoot(root, app);
} else {
	ReactDOM.createRoot(root).render(app);
}
