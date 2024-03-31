import { useTypedLoaderData } from "@/hooks/useTypedLoaderData";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { ProfileSkeleton } from "./profile.skeleton";
import type { ProfileLoader } from "./profile.types";
import { ProfileView } from "./profile.view";
import { useProfileModel } from "./useProfile.model";

export function ProfileViewModel() {
	const { profileQuery } = useTypedLoaderData<ProfileLoader>();

	return (
		<Suspense fallback={<ProfileSkeleton />}>
			<Await resolve={profileQuery}>
				{(profileQueryResolved) => <ProfileView {...useProfileModel({ profileQuery: profileQueryResolved })} />}
			</Await>
		</Suspense>
	);
}
