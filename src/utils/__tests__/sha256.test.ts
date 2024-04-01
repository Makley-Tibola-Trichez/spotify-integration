import { sha256 } from "../sha256";

describe("sha256", () => {
	it("should return a promise containing the SHA-256 hash of the input string", () => {
		const plain = "test";
		const expectedHash = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08";

		sha256(plain).then((hash) => {
			const hashString = Array.from(new Uint8Array(hash))
				.map((byte) => byte.toString(16).padStart(2, "0"))
				.join("");
			expect(hashString).toBe(expectedHash);
		});
	});
});
