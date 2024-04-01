import { Skeleton } from "@/components/ui/skeleton";

type ArtistAlbumsItemsSkeletonProps = {
	visible: boolean;
};
export const ArtistAlbumsItemsSkeleton = (props: ArtistAlbumsItemsSkeletonProps) => {
	if (!props.visible) {
		return null;
	}

	return Array.from({ length: 5 }).map(() => (
		<li key={`skeleton-${crypto.randomUUID()}`}>
			<div className="flex items-center gap-4">
				<Skeleton className="h-20 w-20 rounded" />
				<div className="flex flex-col gap-2">
					<Skeleton className="h-6 w-20" />
					<Skeleton className="h-4 w-10" />
				</div>
			</div>
		</li>
	));
};

export function ArtistAlbumsSkeleton() {
	return (
		<ul className="grid gap-x-2 gap-y-2 lg:grid-cols-2">
			<ArtistAlbumsItemsSkeleton visible />
		</ul>
	);
}
