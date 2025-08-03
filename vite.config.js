import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import path from "path"; // 🔥 path moduli kerak

export default defineConfig({
  plugins: [
    vue(),
    viteCompression({ algorithm: "gzip" }),
    viteCompression({ algorithm: "brotliCompress" })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // 🔥 @ -> src papkasiga yo'naltiriladi
    }
  }
});
