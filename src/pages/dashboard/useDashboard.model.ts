import { SpotifyService } from "@/api/spotifyService";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export default function useDashboardModel() {
	const [searchParams] = useSearchParams();

	const code = searchParams.get("code");

	useQuery({
		queryKey: ["acessToken", code],
		async queryFn() {
			const codeVerifier = localStorage.getItem("codeVerifier");

			const response = SpotifyService.getAccessToken(code, codeVerifier, "http://localhost:3000/dashboard");

			return response;
		},
	});

	return { code };
}
