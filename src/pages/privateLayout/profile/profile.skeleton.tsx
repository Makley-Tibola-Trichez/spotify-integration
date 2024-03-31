import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<Skeleton className="h-32 w-32 rounded-full" />
			<Skeleton className="h-6 w-36" />
			<Skeleton className="h-11 w-32 rounded-full" />
		</div>
	);
}
