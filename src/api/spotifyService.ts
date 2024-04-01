import axios from "axios";
import type { CreatePlaylistBody } from "./types/createPlaylist.types";
import type { GetArtistResponse } from "./types/getArtist.types";
import type { GetUserProfileResponse } from "./types/getUserProfile.types";
import type { ListArtistAlbumsParams, ListArtistAlbumsResponse } from "./types/listArtistAlbums.types";
import type { ListUserPlaylistsResponse } from "./types/listUserPlaylists.types";
import type { ListUserTopArtistsParams, ListUserTopArtistsResponse } from "./types/listUserTopArtists.types";

export const axiosSpotifyV1 = axios.create({ baseURL: "https://api.spotify.com/v1" });

export const SpotifyService = {
	listUserPlaylists: () => axiosSpotifyV1.get<ListUserPlaylistsResponse>("/me/playlists"),

	listUserTopArtists: (params?: ListUserTopArtistsParams) =>
		axiosSpotifyV1.get<ListUserTopArtistsResponse>("/me/top/artists", { params }),

	listArtistAlbums: (artistId: string, params: ListArtistAlbumsParams) =>
		axiosSpotifyV1.get<ListArtistAlbumsResponse>(`/artists/${artistId}/albums`, { params }),

	getArtist: (artistID: string) => axiosSpotifyV1.get<GetArtistResponse>(`/artists/${artistID}`),

	createPlaylist: (userId: string, body: CreatePlaylistBody) => axiosSpotifyV1.post(`/users/${userId}/playlists`, body),

	getUserProfile: () => axiosSpotifyV1.get<GetUserProfileResponse>("/me"),
};
