import { useNavigate } from "react-router-dom";
import type { ArtistLoader } from "./artist.types";

export function useArtistModel(props: ArtistLoader) {
	const navigate = useNavigate();

	const goToPreviousPage = () => navigate(-1);

	return { goToPreviousPage, ...props };
}
