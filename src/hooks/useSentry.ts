import { useEffect } from "react";

import * as Sentry from "@sentry/react";

import { SpotifyService } from "@/api/spotifyService";
import { useQuery } from "@tanstack/react-query";

const production = import.meta.env.PROD;

const useSentry = () => {
	const profileQuery = useQuery({
		queryKey: ["profile"],
		queryFn: () => SpotifyService.getUserProfile(),
	});

	useEffect(() => {
		Sentry.init({
			initialScope(scope) {
				if (profileQuery.data?.data) {
					scope.setUser({
						...scope.getUser(),
						id: profileQuery.data.data.id,
						email: profileQuery.data.data.email,
						username: profileQuery.data.data.display_name,
					});
				}
				return scope;
			},
			enabled: production,
			dsn: import.meta.env.VITE_SENTRY_DSN,
			environment: import.meta.env.MODE,
			integrations: [Sentry.browserTracingIntegration()],

			// Performance Monitoring
			tracesSampleRate: 1.0, //  Capture 100% of the transactions
			// Session Replay
			replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
			replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
		});
	}, [profileQuery.data]);
};

export default useSentry;
