import type { ExternalUrls, Followers, Image } from "./spotifyService.types";

export type GetArtistResponse = {
	external_urls: ExternalUrls;
	followers: Followers;
	genres: string[];
	href: string;
	id: string;
	images: Image[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
};
