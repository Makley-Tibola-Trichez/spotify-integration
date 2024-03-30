import axios from "axios";
import { base64encode } from "../utils/base64encode";
import { generateRandomString } from "../utils/generateRandomString";
import { sha256 } from "../utils/sha256";
import type { CreatePlaylistBody } from "./types/createPlaylist.types";
import type { GenerateAccessTokenResponse } from "./types/generateAcessToken.types";
import type { GetArtistResponse } from "./types/getArtist.types";
import type { GetUserAuthorizationParams } from "./types/getUserAuthorization.types";
import type { ListArtistAlbumsResponse } from "./types/listArtistAlbums.types";
import type { ListUserPlaylistsResponse } from "./types/listUserPlaylists.types";
import type { ListUserTopArtistsResponse } from "./types/listUserTopArtists.types";

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
			scope: "user-read-private user-read-email user-top-read",
			code_challenge_method: "S256",
			code_challenge: codeChallenge,
			redirect_uri: redirectURI,
		};

		spotifyAuthUrl.search = new URLSearchParams(params).toString();
		location.href = spotifyAuthUrl.toString();
	},

	generateAccessToken: (code: string, codeVerifier: string) =>
		axiosSpotifyAccessToken.post<GenerateAccessTokenResponse>("", {
			client_id: SPOTIFY_CLIENT_ID,
			grant_type: "authorization_code",
			code,
			redirect_uri: redirectURI,
			code_verifier: codeVerifier,
		}),

	listUserPlaylists: (params?: { limit: number; offset: number }) =>
		axiosSpotifyV1.get<ListUserPlaylistsResponse>("/me/playlists", { params }),

	listUserTopArtists: () => axiosSpotifyV1.get<ListUserTopArtistsResponse>("/me/top/artists"),
	listArtistAlbums: (artistId: string) => axiosSpotifyV1.get<ListArtistAlbumsResponse>(`/artists/${artistId}/albums`),
	getArtist: (artistID: string) => axiosSpotifyV1.get<GetArtistResponse>(`/artists/${artistID}`),

	createPlaylist: (userId: string, body: CreatePlaylistBody) => axiosSpotifyV1.post(`/users/${userId}/playlists`, body),
};
