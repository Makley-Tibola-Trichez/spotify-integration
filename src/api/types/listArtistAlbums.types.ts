import type { _ExternalUrls, _Image, _Restrictions } from "./spotifyService.types";

export type ListArtistAlbumsResponse = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: ItemListArtistAlbumsResponse[];
};

export type ItemListArtistAlbumsResponse = {
	album_type: string;
	total_tracks: number;
	available_markets: string[];
	external_urls: _ExternalUrls;
	href: string;
	id: string;
	images: _Image[];
	name: string;
	release_date: string;
	release_date_precision: string;
	restrictions: _Restrictions;
	type: string;
	uri: string;
	artists: _Artist[];
	album_group: string;
};

type _Artist = {
	external_urls: _ExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
};
