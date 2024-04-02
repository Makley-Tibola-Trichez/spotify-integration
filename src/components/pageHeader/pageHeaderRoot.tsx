export function PageHeaderRoot({ children }: React.PropsWithChildren) {
	return <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:gap-0">{children}</div>;
}
