import type { ArtistsLoader } from "./artists.types";

export function useArtistsModel(props: ArtistsLoader) {
	return { ...props };
}
