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

type _Image = {
	url: string;
	height: number;
	width: number;
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

type _ExternalUrls = {
	spotify: string;
};
type _Followers = {
	href: string;
	total: number;
};

type _Tracks = {
	href: string;
	total: number;
};
