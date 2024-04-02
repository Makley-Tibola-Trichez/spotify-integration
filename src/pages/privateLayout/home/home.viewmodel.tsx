import { useTypedLoaderData } from "@/hooks/useTypedLoaderData";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { HomeSkeleton } from "./home.skeleton";
import type { LoaderHome } from "./home.types";
import { HomeView } from "./home.view";
import { useHomeModel } from "./useHome.model";

export default function HomeViewModel() {
	const { last5PlayedTracksQuery } = useTypedLoaderData<LoaderHome>();

	return (
		<Suspense fallback={<HomeSkeleton />}>
			<Await resolve={last5PlayedTracksQuery}>{() => <HomeView {...useHomeModel()} />}</Await>
		</Suspense>
	);
}
