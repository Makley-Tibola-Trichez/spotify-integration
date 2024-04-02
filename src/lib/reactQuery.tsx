import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import Cookies from "js-cookie";
import { type PropsWithChildren, useMemo } from "react";

const MAX_RETRIES = 1;
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

export default function ReactQueryProvider({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools buttonPosition="bottom-left" />
			{children}
		</QueryClientProvider>
	);
}
