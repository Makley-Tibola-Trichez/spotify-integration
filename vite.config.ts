/// <reference types="vitest" />
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => ({
	resolve: {
		alias: { "@": path.resolve(".", "./src") },
	},
	test: {
		css: false,
		include: ["src/**/__tests__/*"],
		globals: true,
		environment: "jsdom",
		setupFiles: "src/setupTests.ts",
		clearMocks: true,
		coverage: {
			include: ["src/**/*"],
			exclude: ["src/main.tsx"],
			thresholds: {
				"100": true,
			},
			provider: "istanbul",
			enabled: true,
			reporter: ["text", "lcov"],
			reportsDirectory: "coverage",
		},
	},
	plugins: [
		tsconfigPaths(),
		react(),
		...(mode === "test"
			? []
			: [
					VitePWA({
						registerType: "autoUpdate",
						// add this to cache all the
						// static assets in the public folder
						includeAssets: ["**/*"],
						workbox: { globPatterns: ["**/*"] },
						devOptions: {
							enabled: false,
						},
						manifest: {
							theme_color: "#57b660",
							background_color: "#090707",
							orientation: "any",
							display: "standalone",
							lang: "pt-BR",
							name: "Spotify",
							short_name: "Spotify",
							icons: [
								{
									purpose: "maskable",
									sizes: "512x512",
									src: "icon512_maskable.png",
									type: "image/png",
								},
								{
									purpose: "any",
									sizes: "512x512",
									src: "icon512_rounded.png",
									type: "image/png",
								},
							],
						},
					}),
				]),
	],
}));
