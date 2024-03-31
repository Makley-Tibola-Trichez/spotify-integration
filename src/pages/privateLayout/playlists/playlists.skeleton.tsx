import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { PageHeader } from "@/components/pageHeader";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const _staticPlaylistsSkeletonList = Array.from({ length: 5 }).map(() => (
	<div className="flex items-center gap-4 text-white" key={crypto.randomUUID()}>
		<Skeleton className="h-[72px] w-[72px] rounded" />
		<div>
			<Skeleton className="mb-1 h-6 w-32" />
			<Skeleton className="h-4 w-20" />
		</div>
	</div>
));

export const PlaylistsSkeleton = () => {
	return (
		<ContentLayout>
			<PageHeader.Root>
				<div>
					<PageHeader.Title>Minhas Playlists</PageHeader.Title>
					<PageHeader.Description>Sua coleção pessoal de playlists</PageHeader.Description>
				</div>
				<div>
					<Button className="w-28">Salvar</Button>
				</div>
			</PageHeader.Root>
			<div className="flex flex-col gap-4">{_staticPlaylistsSkeletonList}</div>
		</ContentLayout>
	);
};