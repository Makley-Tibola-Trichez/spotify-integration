import { SpotifyAuthService } from "@/api/spotifyAuthService";
import { axiosSpotifyV1 } from "@/api/spotifyService";
import { updateAuthTokens } from "@/utils/updateAuthTokens";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export function withAuthInPublicRoute(Component: React.FC): React.FC {
	const accessToken = Cookies.get("accessToken");
	const refreshToken = Cookies.get("refreshToken");

	if (accessToken) {
		axiosSpotifyV1.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

		return () => <Navigate to="/home" />;
	}

	if (refreshToken) {
		return () => {
			useQuery({
				queryKey: ["refreshToken", refreshToken],
				async queryFn() {
					const response = await SpotifyAuthService.refreshToken(refreshToken);

					updateAuthTokens(response.data);
					return response;
				},
				staleTime: 0,
			});

			return <Navigate to="/" />;
		};
	}
	return () => <Component />;
}
