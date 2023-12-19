import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            "@": "/src",
            "@components": "/src/components",
            "@pages": "/src/pages",
        },
    },
});
