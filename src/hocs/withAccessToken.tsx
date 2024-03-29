import { SpotifyService } from "@/api/spotifyService";
import { Progress } from "@/components/ui/progress";
import LoginViewModel from "@/pages/login/login.viewmodel";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { useSearchParams } from "react-router-dom";

export function withAccessToken(Component: FC) {
	return function WithAccessToken() {
		const [searchParams] = useSearchParams();

		const code = searchParams.get("code");

		const accessToken = localStorage.getItem("accessToken");
		const codeVerifier = localStorage.getItem("codeVerifier");

		const accessTokenQuery = useQuery({
			queryKey: ["accessToken", code],
			async queryFn() {
				if (!codeVerifier) {
					// TODO: adicionar tratamento para code verifier
					throw new Error("Tratar code verifier");
				}
				if (!code) {
					// Nunca deve chegar aqui, pois é validado de code é true para usar a queryFn
					throw new Error("Code não encontrado");
				}

				const response = await SpotifyService.getAccessToken(code, codeVerifier, "http://localhost:3000/dashboard");

				localStorage.setItem("accessToken", response.data.access_token);
			},
			enabled: Boolean(code),
		});

		if (accessTokenQuery.isFetching) {
			return <Progress />;
		}
		if (accessToken === null) {
			return <LoginViewModel />;
		}

		return <Component />;
	};
}
