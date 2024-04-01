import { generateRandomString } from "../generateRandomString";

describe("generateRandomString", () => {
	it("should generate a random string of the specified length", () => {
		const length = 10;
		const result = generateRandomString(length);
		expect(result.length).toBe(length);
	});

	it("should generate an empty string when length is 0", () => {
		const length = 0;
		const result = generateRandomString(length);
		expect(result).toBe("");
	});
});
