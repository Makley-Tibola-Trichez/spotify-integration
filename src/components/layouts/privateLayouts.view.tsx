import { DiscIcon, HomeIcon, PlayIcon, UserIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import SpotifyLogo from "../../assets/spotify-logo.svg";

export function PrivateLayoutView() {
	return (
		<>
			<div className="grid min-h-screen w-full lg:grid-cols-[250px_1fr] md:grid-cols-[220px_1fr]">
				<div className="hidden bg-black md:block">
					<div className="flex h-full max-h-screen flex-col gap-2">
						<div className="flex-1">
							<div className="p-6 py-7">
								<Link to="/" className="flex items-center gap-2 font-semibold">
									<img src={SpotifyLogo} alt="Spotify" />
								</Link>
							</div>
							<nav className="grid items-start px-2 font-medium text-sm lg:px-6">
								<Link
									to="/dashboard"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-white/10"
								>
									<HomeIcon size="24px" />
									Home
								</Link>
								<Link
									to="/dashboard"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-white/10"
								>
									<DiscIcon size="24px" />
									Artistas
								</Link>
								<Link
									to="/dashboard"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-white/10"
								>
									<PlayIcon size="24px" />
									Playlists
								</Link>
								<Link
									to="/dashboard"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-white/10"
								>
									<UserIcon size="24px" />
									Perfil
								</Link>
							</nav>
						</div>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
