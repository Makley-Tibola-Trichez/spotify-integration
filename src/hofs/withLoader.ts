import type { QueryClient } from "@tanstack/react-query";
import type { LoaderFunctionArgs } from "react-router-dom";

type _LoaderFunction<T, R> = (args: LoaderFunctionArgs<T>, queryClient: QueryClient) => Promise<R> | R;

export const withLoader = <T, R = null>(func: _LoaderFunction<T, R>) => {
	return (queryClient: QueryClient) => {
		return (args: LoaderFunctionArgs<T>) => func(args, queryClient);
	};
};
