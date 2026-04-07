/**
 * prerender.js
 * -----------
 * Runs after `build:client` and `build:server` to produce fully pre-rendered
 * HTML files for every route.  Googlebot (and other crawlers) will see the
 * complete DOM on first paint — no JavaScript execution required.
 *
 * Usage:  node prerender.js   (called automatically by `npm run build`)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p) => path.resolve(__dirname, p);

// ---------------------------------------------------------------------------
// 1. Define every route that should be pre-rendered.
//    Keep this list in sync with the <Route> entries in App.tsx.
// ---------------------------------------------------------------------------
const ROUTES = [
  '/',
  '/pulgadas-a-mm',
  '/centimetros-a-pulgadas',
  '/contacto',
  '/politica-de-privacidad',
  '/aviso-legal',
];

// ---------------------------------------------------------------------------
// 2. Load the client-built index.html as the template.
// ---------------------------------------------------------------------------
const templatePath = resolve('dist/index.html');

if (!fs.existsSync(templatePath)) {
  console.error(
    '❌  dist/index.html not found. Run "npm run build:client" first.',
  );
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

// ---------------------------------------------------------------------------
// 3. Import the SSR render function produced by build:server.
// ---------------------------------------------------------------------------
const serverEntryPath = resolve('dist/server/entry-server.js');

if (!fs.existsSync(serverEntryPath)) {
  console.error(
    '❌  dist/server/entry-server.js not found. Run "npm run build:server" first.',
  );
  process.exit(1);
}

const { render } = await import(serverEntryPath);

// ---------------------------------------------------------------------------
// 4. Pre-render every route.
// ---------------------------------------------------------------------------
console.log('\n🚀  Pre-rendering routes…\n');

for (const route of ROUTES) {
  try {
    const { html: appHtml, head } = render(route);

    let finalHtml = template;

    // Inject SSR-rendered body content into the root div.
    finalHtml = finalHtml.replace('<!--app-html-->', appHtml);

    // Inject Helmet-collected head tags right before </head>.
    // This allows per-page <title>, <meta>, <link> etc. to override the
    // defaults already present in index.html.
    if (head) {
      finalHtml = finalHtml.replace('</head>', `    ${head}\n  </head>`);
    }

    // Determine output file path.
    const fileName = route === '/' ? '/index.html' : `${route}.html`;
    const filePath = resolve(`dist${fileName}`);

    // Ensure the parent directory exists (for nested routes).
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, finalHtml);
    console.log(`  ✅  ${route}  →  dist${fileName}`);
  } catch (err) {
    console.error(`  ❌  Failed to pre-render ${route}:`);
    console.error(`      ${err.message}`);
    // Continue with other routes instead of aborting entirely.
  }
}

console.log('\n✨  Pre-rendering complete!\n');
