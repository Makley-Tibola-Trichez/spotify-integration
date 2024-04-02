import { registerSW } from "virtual:pwa-register";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import dayjs from "dayjs";

import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

registerSW();

const MAX_RETRIES = 0;
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 1000 * 60 * 60 * 24,
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES,
		},
	},
});

const localStoragePersister = createSyncStoragePersister({
	storage: window.localStorage,
});

if (import.meta.env.MODE !== "development") {
	persistQueryClient({
		queryClient: queryClient,
		maxAge: 1000 * 60 * 60 * 24,
		persister: localStoragePersister,
	});
}

const container = document.querySelector("#root");
if (container) {
	const root = createRoot(container);
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools />
				<App />
			</QueryClientProvider>
		</StrictMode>,
	);
}
