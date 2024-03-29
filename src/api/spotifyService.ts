import axios from "axios";

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

const generateRandomString = (length: number) => {
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const values = crypto.getRandomValues(new Uint8Array(length));
	return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const sha256 = async (plain: string) => {
	const encoder = new TextEncoder();
	const data = encoder.encode(plain);
	return crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input: ArrayBuffer) =>
	btoa(String.fromCodePoint(...new Uint8Array(input)))
		.replaceAll("=", "")
		.replaceAll("+", "-")
		.replaceAll("/", "_");

const axiosSpotifyAccessToken = axios.create({
	baseURL: "https://accounts.spotify.com/api/token",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});

export const SpotifyService = {
	async getUserAuthorization() {
		const codeVerifierLength = 64;
		const codeVerifier = generateRandomString(codeVerifierLength);
		const hashed = await sha256(codeVerifier);
		const codeChallenge = base64encode(hashed);

		const redirectUri = "http://localhost:3000/dashboard";

		const scope = "user-read-private user-read-email";
		const authUrl = new URL("https://accounts.spotify.com/authorize");

		// generated in the previous step
		localStorage.setItem("codeVerifier", codeVerifier);

		const params: UserAuthorizationParams = {
			response_type: "code",
			client_id: SPOTIFY_CLIENT_ID,
			scope,
			code_challenge_method: "S256",
			code_challenge: codeChallenge,
			redirect_uri: redirectUri,
		};

		authUrl.search = new URLSearchParams(params).toString();
		location.href = authUrl.toString();
	},

	getAccessToken(code: string, codeVerifier: string, redirectUri: string) {
		return axiosSpotifyAccessToken.post<AcessTokenResponse>("", {
			client_id: SPOTIFY_CLIENT_ID,
			grant_type: "authorization_code",
			code,
			redirect_uri: redirectUri,
			code_verifier: codeVerifier,
		});
	},
};

type UserAuthorizationParams = {
	response_type: "code";
	client_id: string;
	scope: string;
	code_challenge_method: "S256";
	code_challenge: string;
	redirect_uri: string;
};

type AcessTokenResponse = {
	/**
	 * An access token that can be provided in subsequent calls, for example to Spotify Web API services.
	 */
	access_token: string;
	/**
	 * How the access token may be used: always "Bearer".
	 */
	token_type: string;
	/**
	 * A space-separated list of scopes which have been granted for this access_token
	 */
	scope: string;
	/**
	 * The time period (in seconds) for which the access token is valid.
	 */
	expires_in: number;
	refresh_token: string;
};
