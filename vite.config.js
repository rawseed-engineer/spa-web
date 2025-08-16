import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/spa-web/",

  plugins: [react()],

  // Production build optimizations
  build: {
    // Output directory
    outDir: "dist",

    // Generate source maps for debugging (optional)
    sourcemap: false,

    // Minify the output
    minify: "esbuild",

    // Target modern browsers for smaller bundle size
    target: "esnext",

    // Rollup options for advanced configuration
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Separate vendor libraries
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },

        // Optimize chunk file naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },

    // Chunk size warning limit (500kb)
    chunkSizeWarningLimit: 500,

    // Enable CSS code splitting
    cssCodeSplit: true,
  },

  // Development server configuration
  server: {
    // Enable history API fallback for SPA routing
    historyApiFallback: true,
    port: 5173,
    open: true, // Automatically open browser
  },

  // Preview server configuration (for production preview)
  preview: {
    port: 4173,
    // Also enable history fallback for preview
    historyApiFallback: true,
  },

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
