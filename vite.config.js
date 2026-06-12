import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { router } from "sv-router/vite-plugin";

const base = 'gh-issues-site-poc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    router({
      base,
    }),
  ],
  base: `/${base}/`,
})
