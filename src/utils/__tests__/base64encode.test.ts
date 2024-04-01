import { base64encode } from "../base64encode";

describe("base64encode", () => {
	it("should encode valid input ArrayBuffer to base64 string", () => {
		const input = new ArrayBuffer(4);
		const view = new Uint8Array(input);
		view[0] = 72;
		view[1] = 101;
		view[2] = 108;
		view[3] = 108;

		const result = base64encode(input);

		expect(result).toBe("SGVsbA");
	});

	it("should throw an error if input is not an ArrayBuffer", () => {
		// Arrange
		const input = "Hello";

		// Act and Assert
		expect(() => {
			// @ts-expect-error input is not an ArrayBuffer
			base64encode(input);
		}).toThrowError("input is not an ArrayBuffer");
	});
});
