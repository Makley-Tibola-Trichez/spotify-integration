import { SpotifyService } from "@/api/spotifyService";
import { withLoader } from "@/hofs/withLoader";
import { defer } from "react-router-dom";
import type { PromiseProfileLoader } from "./profile.types";

export const profileLoader = withLoader((_, queryClient) => {
	const profileLoader: PromiseProfileLoader = {
		profileQuery: queryClient.fetchQuery({
			queryKey: ["profile"],
			queryFn: () => SpotifyService.getUserProfile(),
		}),
	};

	return defer(profileLoader);
});
