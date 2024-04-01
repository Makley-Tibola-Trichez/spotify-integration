import type { InfiniteData } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

export type Loader<K extends string, V> = {
	[key in K]: AxiosResponse<V>;
};

export type PromiseLoader<T extends Loader<string, unknown>> = {
	[key in keyof T]: Promise<T[key]>;
};

export type InfiniteLoader<K extends string, V> = {
	[key in K]: InfiniteData<AxiosResponse<V>>;
};

export type PromiseInfiniteLoader<T extends InfiniteLoader<string, unknown>> = {
	[key in keyof T]: Promise<T[key]>;
};
