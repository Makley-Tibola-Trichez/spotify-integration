import { SpotifyService, axiosSpotifyV1 } from "@/api/spotifyService";
import axios, { type AxiosError, HttpStatusCode } from "axios";
import { type LoaderFunction, redirect } from "react-router-dom";

export const privateLayoutLoader: LoaderFunction = async ({ request }) => {
	const [_, searchParams] = request.url.split("?");
	const urlSearchParams = new URLSearchParams(searchParams);

	const codeVerifier = localStorage.getItem("codeVerifier");
	const accessToken = localStorage.getItem("accessToken");
	const code = urlSearchParams.get("code");

	if (accessToken) {
		axiosSpotifyV1.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
		return null;
	}

	if (!codeVerifier || !code) {
		return redirect("/");
	}

	const response = await SpotifyService.generateAccessToken(code, codeVerifier);

	localStorage.setItem("accessToken", response.data.access_token);

	axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;

	return null;
};
