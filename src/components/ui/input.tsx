import * as React from "react";

import { cn } from "@/lib/utils";
import { TriangleAlertIcon } from "lucide-react";
import { Alert } from "./alert";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	helper?: { error: React.ReactNode } | { info: React.ReactNode };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, helper = {}, ...props }, ref) => {
	return (
		<>
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors disabled:cursor-not-allowed file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
					className,
				)}
				ref={ref}
				{...props}
			/>
			{"error" in helper ? (
				<Alert.Root variant={helper.error ? "destructive" : "default"}>
					<div className="flex items-end gap-4">
						<TriangleAlertIcon />
						<Alert.Title>{helper.error}</Alert.Title>
					</div>
				</Alert.Root>
			) : null}
		</>
	);
});
Input.displayName = "Input";

export { Input };
