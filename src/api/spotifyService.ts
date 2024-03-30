import axios from "axios";
import { base64encode } from "../utils/base64encode";
import { generateRandomString } from "../utils/generateRandomString";
import { sha256 } from "../utils/sha256";
import type { GenerateAccessTokenResponse } from "./types/generateAcessToken.types";
import type { GetUserAuthorizationParams } from "./types/getUserAuthorization.types";
import type { ListUserPlaylistsResponse } from "./types/listUserPlaylists.types";

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const redirectURI = `${BASE_URL}/home`;
const spotifyAuthUrl = new URL("https://accounts.spotify.com/authorize");

export const axiosSpotifyV1 = axios.create({ baseURL: "https://api.spotify.com/v1" });
const axiosSpotifyAccessToken = axios.create({
	baseURL: "https://accounts.spotify.com/api/token",
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

export const SpotifyService = {
	async getUserAuthorization() {
		const codeVerifier = generateRandomString(64);
		const hashed = await sha256(codeVerifier);
		const codeChallenge = base64encode(hashed);

		localStorage.setItem("codeVerifier", codeVerifier);

		const params: GetUserAuthorizationParams = {
			response_type: "code",
			client_id: SPOTIFY_CLIENT_ID,
			scope: "user-read-private user-read-email",
			code_challenge_method: "S256",
			code_challenge: codeChallenge,
			redirect_uri: redirectURI,
		};

		spotifyAuthUrl.search = new URLSearchParams(params).toString();
		location.href = spotifyAuthUrl.toString();
	},

	generateAccessToken(code: string, codeVerifier: string) {
		return axiosSpotifyAccessToken.post<GenerateAccessTokenResponse>("", {
			client_id: SPOTIFY_CLIENT_ID,
			grant_type: "authorization_code",
			code,
			redirect_uri: redirectURI,
			code_verifier: codeVerifier,
		});
	},

	listUserPlaylists(params?: { limit: number; offset: number }) {
		return axiosSpotifyV1.get<ListUserPlaylistsResponse>("/me/playlists", { params });
	},
};
