import { SpotifyService } from "@/api/spotifyService";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useHomeModel() {
	const last5PlayedTracksQuery = useQuery({
		queryKey: ["last5PlayedTracks"],
		queryFn: SpotifyService.getLast5PlayedTracks,
		refetchInterval: 1000 * 30,
	});

	return { last5PlayedTracksQuery };
}
