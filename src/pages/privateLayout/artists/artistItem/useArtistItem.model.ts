import type { ItemListUserTopArtistsResponse } from "@/api/types/listUserTopArtists.types";
import { useNavigate } from "react-router-dom";

export function useArtistItemModel(item: ItemListUserTopArtistsResponse) {
	const _navigate = useNavigate();
	const handleSeeArtist = () => _navigate(`./${item.id}/albums`);

	return {
		item,
		handleSeeArtist,
	};
}
