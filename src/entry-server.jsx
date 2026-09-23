import { renderToString } from "react-dom/server";
import App from "./App";

// Used at build time to write the page's HTML ahead of time (see scripts/prerender.js).
export function render() {
	return renderToString(<App />);
}
