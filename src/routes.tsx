import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import { SpotifyService } from "./api/spotifyService";
import { PrivateLayoutView } from "./components/layouts/privateLayouts.view";

export const routes = createBrowserRouter([
	{
		children: [
			{
				path: "/",
				lazy: async () =>
					import("./pages/login/login.viewmodel").then((va) => ({
						Component: va.default,
					})),
			},
			{
				Component: PrivateLayoutView,
				loader: async ({ request }) => {
					const [_, searchParams] = request.url.split("?");
					const urlSearchParams = new URLSearchParams(searchParams);

					const codeVerifier = localStorage.getItem("codeVerifier");
					const accessToken = localStorage.getItem("accessToken");
					const code = urlSearchParams.get("code");

					if (accessToken) {
						axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
						return null;
					}

					if (!codeVerifier || !code) {
						throw new Error("Parece que houve um erro ao realizara autenticação");
					}

					const response = await SpotifyService.getAccessToken(code, codeVerifier, "http://localhost:3000/dashboard");

					localStorage.setItem("accessToken", response.data.access_token);

					axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
					return null;
				},
				children: [
					{
						path: "/dashboard",
						lazy: async () =>
							import("./pages/dashboard/dashboard.viewmodel").then((va) => ({
								Component: va.default,
							})),
					},
				],
			},
		],
	},
]);
