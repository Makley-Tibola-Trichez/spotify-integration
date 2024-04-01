import type { _ExternalUrls, _Followers, _Image } from "./spotifyService.types";

export interface ListUserPlaylistsResponse {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: ItemListUserPLaylistsResponse[];
}

export type ItemListUserPLaylistsResponse = {
	collaborative: boolean;
	description: string;
	external_urls: _ExternalUrls;
	href: string;
	id: string;
	images: _Image[];
	name: string;
	owner: _Owner;
	public: boolean;
	snapshot_id: string;
	tracks: _Tracks;
	type: string;
	uri: string;
};

type _Owner = {
	external_urls: _ExternalUrls;
	followers: _Followers;
	href: string;
	id: string;
	type: string;
	uri: string;
	display_name: string;
};

type _Tracks = {
	href: string;
	total: number;
};
