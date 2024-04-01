import type { AxiosResponse } from "axios";

export function getNextPageParam<T extends AxiosResponse>(lastPage: T): number | undefined {
	if (lastPage.data.next !== null) {
		return lastPage.data.offset + lastPage.data.limit;
	}
}
