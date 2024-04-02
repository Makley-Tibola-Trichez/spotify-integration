export const BottomBarRoot = ({ children }: React.PropsWithChildren) => {
	return <div className="absolute bottom-0 flex w-full border-t-2 bg-background md:hidden">{children}</div>;
};
