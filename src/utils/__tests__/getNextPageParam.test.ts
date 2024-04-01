import type { AxiosResponse } from "axios";
import { getNextPageParam } from "../getNextPageParam";

describe("getNextPageParam", () => {
	it("should return the sum of lastPage.data.offset and lastPage.data.limit when lastPage.data.next is not null", () => {
		const lastPage = {
			data: {
				next: "next-page",
				offset: 10,
				limit: 5,
			},
		} as AxiosResponse;

		const result = getNextPageParam(lastPage);

		expect(result).toBe(15);
	});

	it("should return undefined if lastPage.data.next is null", () => {
		const lastPage = {
			data: {
				next: null,
				offset: 10,
				limit: 5,
			},
		} as AxiosResponse;

		const result = getNextPageParam(lastPage);

		expect(result).toBeUndefined();
	});
});
