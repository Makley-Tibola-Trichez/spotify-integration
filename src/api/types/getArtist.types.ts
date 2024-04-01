import type { _ExternalUrls, _Followers, _Image } from "./spotifyService.types";

export type GetArtistResponse = {
	external_urls: _ExternalUrls;
	followers: _Followers;
	genres: string[];
	href: string;
	id: string;
	images: _Image[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
};
