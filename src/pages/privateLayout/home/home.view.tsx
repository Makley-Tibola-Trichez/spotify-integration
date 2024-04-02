import { ContentLayout } from "@/components/contentLayout/contentLayout";
import { Table } from "@/components/ui/table";
import { Tooltip } from "@/components/ui/tooltip";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ClockIcon } from "lucide-react";
import { HomeSkeleton } from "./home.skeleton";
import { HomeTableRowView } from "./homeTableRow/homeTableRow.view";
import type { useHomeModel } from "./useHome.model";
dayjs.extend(relativeTime);

export function HomeView({ last5PlayedTracksQuery }: ReturnType<typeof useHomeModel>) {
	return (
		<ContentLayout>
			<div className="font-bold text-3xl">Últimas faixas tocadas</div>
			<div className="flex flex-col gap-4">
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head className="w-2/3 md:w-[35%]">Título</Table.Head>
							<Table.Head className="hidden w-[35%] md:table-cell">Álbum</Table.Head>
							<Table.Head>
								<Tooltip.Provider>
									<Tooltip.Root>
										<Tooltip.Trigger asChild>
											<ClockIcon />
										</Tooltip.Trigger>
										<Tooltip.Content>Última reprodução</Tooltip.Content>
									</Tooltip.Root>
								</Tooltip.Provider>
							</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<HomeSkeleton visible={!last5PlayedTracksQuery.isFetched} />
						{last5PlayedTracksQuery.data?.data.items.map((item) => (
							<HomeTableRowView {...item} key={item.track.id} />
						))}
					</Table.Body>
				</Table.Root>
			</div>
		</ContentLayout>
	);
}
