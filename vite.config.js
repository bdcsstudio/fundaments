export default {
    build: {
        minify: true,
        rollupOptions: {
            output: {
                entryFileNames: "assets/index.js",
                assetFileNames: "assets/[name][extname]"
            }
        }
    }
}