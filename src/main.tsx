import { registerSW } from "virtual:pwa-register";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError, HttpStatusCode } from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { redirect } from "react-router-dom";
import App from "./app";
import "./index.css";

registerSW();

const MAX_RETRIES = 1;
const queryClient = new QueryClient({
	queryCache: new QueryCache({}),
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES,
		},
	},
});

const container = document.querySelector("#root");
if (container) {
	const root = createRoot(container);
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</StrictMode>,
	);
}
