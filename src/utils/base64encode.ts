export const base64encode = (input: ArrayBuffer) =>
	btoa(String.fromCodePoint(...new Uint8Array(input)))
		.replaceAll("=", "")
		.replaceAll("+", "-")
		.replaceAll("/", "_");
