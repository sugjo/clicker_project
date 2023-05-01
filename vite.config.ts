import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		createSvgIconsPlugin({
			iconDirs: [resolve(__dirname, "public/icons")],
			symbolId: "icon-[dir]-[name]",
			svgoOptions: {
				plugins: [{
					name: "removeAttrs",
					params: {
						attrs: "fill"
					}
				}]
			}
		})
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src")
		}
	}
});
