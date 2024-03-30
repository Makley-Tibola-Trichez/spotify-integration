export type GetUserProfileResponse = {
	country: string;
	display_name: string;
	email: string;
	explicit_content: _ExplicitContent;
	external_urls: _ExternalUrls;
	followers: _Followers;
	href: string;
	id: string;
	images: _Image[];
	product: string;
	type: string;
	uri: string;
};

type _ExplicitContent = {
	filter_enabled: boolean;
	filter_locked: boolean;
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
