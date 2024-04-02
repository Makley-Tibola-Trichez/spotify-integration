import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { Table } from "@/components/ui/table";
import { ClockIcon } from "@radix-ui/react-icons";

const _staticSkeleton = Array.from({ length: 5 }).map((item) => {
	return (
		<Table.Row key={crypto.randomUUID()}>
			<Table.Cell className="flex items-center gap-3">
				<Skeleton className="h-10 w-10" />
				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-20" />
					<Skeleton className="h-4 w-16" />
				</div>
			</Table.Cell>

			<Table.Cell>
				<div className="text-sm">
					<Skeleton className="h-5 w-20" />
				</div>
			</Table.Cell>
			<Table.Cell>
				<div className="text-sm">
					<Skeleton className="h-5 w-20" />
				</div>
			</Table.Cell>
		</Table.Row>
	);
});

export const HomeSkeleton = () => {
	return (
		<ContentLayout>
			<div className="font-bold text-3xl">Últimas faixas tocadas</div>
			<div className="flex flex-col gap-4">
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head className="w-[35%]">Título</Table.Head>
							<Table.Head className="w-[35%]">Álbum</Table.Head>
							<Table.Head>
								<ClockIcon />
							</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>{_staticSkeleton}</Table.Body>
				</Table.Root>
			</div>
		</ContentLayout>
	);
};
