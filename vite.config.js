import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            images: fileURLToPath(new URL("./public/images", import.meta.url)),
            fonts: fileURLToPath(new URL("./src/assets/fonts", import.meta.url))
        }
    },
    build: {
        //assetsDir: "zeze",
        rollupOptions: {
            input: {
                main: new URL("index.html", import.meta.url).pathname,
                home: new URL("home.html", import.meta.url).pathname,
                folder: new URL("folder.html", import.meta.url).pathname,
                offres: new URL("offres.html", import.meta.url).pathname,
                offre: new URL("offre.html", import.meta.url).pathname,
                article: new URL("article.html", import.meta.url).pathname,
                agenda: new URL("agenda.html", import.meta.url).pathname,
                search: new URL("search.html", import.meta.url).pathname,
            }
        }
    }
});
