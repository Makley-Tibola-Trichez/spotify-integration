import { SpotifyAuthService } from "@/api/spotifyAuthService";
import { axiosSpotifyV1 } from "@/api/spotifyService";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { updateAuthTokens } from "../utils/updateAuthTokens";

export const withAuthInPrivateRoute = (Component: React.FC): React.FC => {
	const authCode = new URLSearchParams(location.search.split("?")[1]).get("code");
	const codeVerifier = localStorage.getItem("codeVerifier");
	const accessToken = Cookies.get("accessToken");
	const refreshToken = Cookies.get("refreshToken");

	if (authCode && codeVerifier) {
		return () => {
			useQuery({
				queryKey: ["generateAccessToken", authCode, codeVerifier],
				async queryFn() {
					const response = await SpotifyAuthService.generateAccessToken(authCode, codeVerifier);

					updateAuthTokens(response.data);
					return response;
				},
				staleTime: 0,
			});

			return <Component />;
		};
	}

	if (accessToken) {
		axiosSpotifyV1.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

		return () => <Component />;
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

			return <Component />;
		};
	}
	return () => <Navigate to="/" />;
};
