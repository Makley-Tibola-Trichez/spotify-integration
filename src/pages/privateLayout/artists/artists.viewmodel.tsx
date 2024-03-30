import { useTypedLoaderData } from "@/hooks/useTypedLoaderData";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { ArtistsSkeleton } from "./artists.skeleton";
import type { ArtistsLoader } from "./artists.types";
import { ArtistsView } from "./artists.view";
import { useArtistsModel } from "./useArtists.model";

export function ArtistsViewModel() {
	const { artistsQuery } = useTypedLoaderData<ArtistsLoader>();

	return (
		<Suspense fallback={<ArtistsSkeleton />}>
			<Await resolve={artistsQuery}>
				{(artistsQuerysResolved) => <ArtistsView {...useArtistsModel({ artistsQuery: artistsQuerysResolved })} />}
			</Await>
		</Suspense>
	);
}
