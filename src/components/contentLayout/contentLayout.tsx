import { cn } from "@/lib/utils";

export function ContentLayout({ children, className }: React.PropsWithChildren<{ className?: string }>) {
	return <div className={cn("m-8 flex flex-col gap-4 text-white", className)}>{children}</div>;
}
