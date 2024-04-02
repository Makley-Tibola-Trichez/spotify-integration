import type { ExternalUrls, Followers, Image, Restrictions } from "./spotifyService.types";

export type GetLast5PlayedTracksResponse = {
	href: string;
	limit: number;
	next: string;
	cursors: Cursors;
	total: number;
	items: ItemLast5PlayedTracksResponse[];
};

type Cursors = {
	after: string;
	before: string;
};

export type ItemLast5PlayedTracksResponse = {
	track: Track;
	played_at: string;
	context: Context;
};

type Track = {
	album: Album;
	artists: TrackArtist[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: ExternalIds;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	is_playable: boolean;
	linked_from: LinkedFrom;
	restrictions: Restrictions;
	name: string;
	popularity: number;
	preview_url: string;
	track_number: number;
	type: string;
	uri: string;
	is_local: boolean;
};

type Album = {
	album_type: string;
	total_tracks: number;
	available_markets: string[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	name: string;
	release_date: string;
	release_date_precision: string;
	restrictions: Restrictions;
	type: string;
	uri: string;
	artists: AlbumnArtist[];
};

type AlbumnArtist = {
	external_urls: ExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
};

type TrackArtist = {
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

type ExternalIds = {
	isrc: string;
	ean: string;
	upc: string;
};

type LinkedFrom = unknown;

type Context = {
	type: string;
	href: string;
	external_urls: ExternalUrls;
	uri: string;
};
