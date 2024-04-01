export const base64encode = (input: ArrayBuffer) => {
	if (!(input instanceof ArrayBuffer)) {
		throw new Error("input is not an ArrayBuffer");
	}

	return btoa(String.fromCodePoint(...new Uint8Array(input)))
		.replaceAll("=", "")
		.replaceAll("+", "-")
		.replaceAll("/", "_");
};
