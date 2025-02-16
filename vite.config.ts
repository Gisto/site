import { defineConfig } from 'vite';

import * as path from 'node:path';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';

import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

// https://vite.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [
      react(),
      mdx({
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      allowedHosts: ['regular-goose-shortly.ngrok-free.app'],
    },
  };
});
