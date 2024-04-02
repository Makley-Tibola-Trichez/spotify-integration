import { Button } from "@/components/ui/button";

import { SpotifyAuthService } from "@/api/spotifyAuthService";
import SpotifyLogo from "@/assets/spotify-logo.svg";
import { withAuthInPublicRoute } from "@/hocs/withAuthInPublicRoute";

export const LoginView = withAuthInPublicRoute(() => {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
			<img src={SpotifyLogo} alt="Spotify logo" />
			<span className="text-center font-bold">Entre com a sua conta Spotify clicando no botão abaixo</span>
			<Button onClick={SpotifyAuthService.getUserAuthorization}>Entrar</Button>
		</div>
	);
});

LoginView.displayName = "LoginView";
