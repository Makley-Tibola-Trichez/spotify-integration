import { Button, type ButtonProperties } from "../ui/button";

type PageHeaderActionButtonProps = React.PropsWithChildren<ButtonProperties>;

export function PageHeaderActionButton({ children, ...props }: PageHeaderActionButtonProps) {
	return <Button {...props}>{children}</Button>;
}
