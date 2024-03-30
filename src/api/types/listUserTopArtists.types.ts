export type ListUserTopArtistsResponse = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: ItemListUserTopArtistsResponse[];
};

export type ItemListUserTopArtistsResponse = {
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

type _ExternalUrls = {
	spotify: string;
};

type _Followers = {
	href: string;
	total: number;
};

type _Image = {
	url: string;
	height: number;
	width: number;
};
