import { axiosSpotifyV1 } from "@/api/spotifyService";
import type { GenerateAccessTokenResponse } from "@/api/types/generateAccessToken.types";
import type { RefreshTokenResponse } from "@/api/types/refreshToken.types";
import Cookies from "js-cookie";

export const updateAuthTokens = (response: GenerateAccessTokenResponse | RefreshTokenResponse) => {
	const expires = new Date();
	expires.setSeconds(expires.getSeconds() + response.expires_in);

	Cookies.set("accessToken", response.access_token, { expires });
	Cookies.set("refreshToken", response.refresh_token);

	axiosSpotifyV1.defaults.headers.common.Authorization = `Bearer ${response.access_token}`;
};
