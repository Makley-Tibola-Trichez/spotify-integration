import { Skeleton } from "@/components/ui/skeleton";

const skeleton = Array.from({ length: 5 }).map(() => (
	<div key={`skeleton-${crypto.randomUUID()}`}>
		<div className="flex items-center gap-4">
			<Skeleton className="h-20 w-20 rounded" />
			<div className="flex flex-col gap-2">
				<Skeleton className="h-6 w-20" />
				<Skeleton className="h-4 w-10" />
			</div>
		</div>
	</div>
));
export function ArtistAlbumsSkeleton() {
	return <>{skeleton}</>;
}
