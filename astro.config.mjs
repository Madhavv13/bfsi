// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: set SITE_URL (https://<user>.github.io) and BASE_PATH (/<repo>) in the
// deploy workflow, or leave BASE_PATH empty for a user site / custom domain.
const site = process.env.SITE_URL || 'https://example.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
