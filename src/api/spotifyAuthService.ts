import { base64encode } from "@/utils/base64encode";
import { generateRandomString } from "@/utils/generateRandomString";
import { sha256 } from "@/utils/sha256";
import axios from "axios";
import type { GenerateAccessTokenResponse } from "./types/generateAccessToken.types";
import type { GetUserAuthorizationParams } from "./types/getUserAuthorization.types";

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const redirectURI = `${BASE_URL}/home`;
const spotifyAuthUrl = new URL("https://accounts.spotify.com/authorize");

const axiosSpotifyAuth = axios.create({
	baseURL: "https://accounts.spotify.com/api/token",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

export const SpotifyAuthService = {
	async getUserAuthorization() {
		const codeVerifier = generateRandomString(64);
		const hashed = await sha256(codeVerifier);
		const codeChallenge = base64encode(hashed);

		localStorage.setItem("codeVerifier", codeVerifier);

		const params: GetUserAuthorizationParams = {
			response_type: "code",
			client_id: SPOTIFY_CLIENT_ID,
			scope: "user-read-private user-read-email user-top-read",
			code_challenge_method: "S256",
			code_challenge: codeChallenge,
			redirect_uri: redirectURI,
		};

		spotifyAuthUrl.search = new URLSearchParams(params).toString();
		location.href = spotifyAuthUrl.toString();
	},

	generateAccessToken: (code: string, codeVerifier: string) =>
		axiosSpotifyAuth.post<GenerateAccessTokenResponse>("", {
			client_id: SPOTIFY_CLIENT_ID,
			grant_type: "authorization_code",
			code,
			redirect_uri: redirectURI,
			code_verifier: codeVerifier,
		}),

	refreshToken: (refreshToken: string) => {
		return axiosSpotifyAuth.post<GenerateAccessTokenResponse>("", {
			client_id: SPOTIFY_CLIENT_ID,
			grant_type: "refresh_token",
			refresh_token: refreshToken,
		});
	},
};
