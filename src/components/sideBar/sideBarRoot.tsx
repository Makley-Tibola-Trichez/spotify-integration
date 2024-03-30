export function SideBarRoot({ children }: Required<React.PropsWithChildren>) {
	return <nav className="grid items-start px-2 font-medium text-sm lg:px-6">{children}</nav>;
}
