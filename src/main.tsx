import { registerSW } from "virtual:pwa-register";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import dayjs from "dayjs";

import "dayjs/locale/pt-br";
import ReactQueryProvider from "./lib/reactQuery";

dayjs.locale("pt-br");

registerSW();

const container = document.querySelector("#root");
if (container) {
	const root = createRoot(container);
	root.render(
		<StrictMode>
			<ReactQueryProvider>
				<App />
			</ReactQueryProvider>
		</StrictMode>,
	);
}
