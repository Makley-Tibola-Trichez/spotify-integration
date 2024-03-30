import { useTypedLoaderData } from "@/hooks/useTypedLoaderData";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { ArtistSkeleton } from "./artist.skeleton";
import type { ArtistLoader } from "./artist.types";
import { ArtistView } from "./artist.view";
import { useArtistModel } from "./useArtist.model";

export function ArtistViewModel() {
	const { artistQuery } = useTypedLoaderData<ArtistLoader>();
	return (
		<Suspense fallback={<ArtistSkeleton />}>
			<Await resolve={artistQuery}>
				{(artistQueryResolved) => <ArtistView {...useArtistModel({ artistQuery: artistQueryResolved })} />}
			</Await>
		</Suspense>
	);
}
