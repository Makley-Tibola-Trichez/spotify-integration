import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { PageHeader } from "@/components/pageHeader";
import { Skeleton } from "@/components/ui/skeleton";

type ArtistsItemsSkeleton = { visible: boolean };

export const ArtistsItemsSkeleton = (props: ArtistsItemsSkeleton) => {
	if (!props.visible) {
		return null;
	}

	return Array.from({ length: 5 }).map(() => (
		<li className="flex items-center gap-4 px-3 py-2" key={`skeleton-${crypto.randomUUID()}`}>
			<Skeleton className="h-[72px] w-[72px] rounded-full" />
			<Skeleton className="h-4 w-40 rounded" />
		</li>
	));
};

export function ArtistsSkeleton() {
	return (
		<ContentLayout>
			<PageHeader.Root>
				<div>
					<PageHeader.Title>Top Artistas</PageHeader.Title>
					<PageHeader.Description>Aqui você encontra seus artistas preferidos</PageHeader.Description>
				</div>
			</PageHeader.Root>
			<ul className="grid gap-x-2 gap-y-2 lg:grid-cols-2">
				<ArtistsItemsSkeleton visible />
			</ul>
		</ContentLayout>
	);
}
