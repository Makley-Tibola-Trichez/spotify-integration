import clsx from "clsx";

export function ContentLayout({ children, className }: React.PropsWithChildren<{ className?: string }>) {
	return <div className={clsx("m-8 flex flex-col gap-4 text-white", className)}>{children}</div>;
}
