import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { Outlet } from "react-router-dom";

export function ArtistSkeleton() {
	return (
		<ContentLayout>
			<div className="mb-8 flex flex-wrap items-center justify-between gap-4">
				<span className="flex items-center gap-2">
					<Skeleton className="h-10 w-10 rounded-full" />
					<Skeleton className="h-6 w-28" />
				</span>
				<Skeleton className="h-[72px] w-[72px] rounded-full bg-cover object-cover" />
			</div>
			<Outlet />
		</ContentLayout>
	);
}
