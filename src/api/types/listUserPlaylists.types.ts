import type { ExternalUrls, Followers, Image, SpotifyListParams } from "./spotifyService.types";

export type ListUserPlaylistsResponse = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: ItemListUserPLaylistsResponse[];
};

export type ItemListUserPLaylistsResponse = {
	collaborative: boolean;
	description: string;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[] | null;
	name: string;
	owner: _Owner;
	public: boolean;
	snapshot_id: string;
	tracks: _Tracks;
	type: string;
	uri: string;
};

type _Owner = {
	external_urls: ExternalUrls;
	followers: Followers;
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

export type ListUserPlaylistsParams = SpotifyListParams;
