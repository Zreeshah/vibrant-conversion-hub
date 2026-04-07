import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

/**
 * SSR entry point – renders the full React app to an HTML string for a given URL.
 *
 * Returns both the rendered app HTML and the collected <head> tags from
 * react-helmet-async so the prerender script can inject them into the
 * final HTML template.
 */
export function render(url: string) {
  // Each render gets its own QueryClient so there is no cross-request state leak.
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Disable retries during SSR to avoid hanging.
        retry: false,
      },
    },
  });

  // Helmet context collects all <Helmet> side-effects during render.
  const helmetContext: { helmet?: any } = {};

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;

  // Build a string of tags that should be injected into <head>.
  // Each helmet property exposes a .toString() helper.
  const head = [
    helmet?.title?.toString() ?? '',
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
    helmet?.script?.toString() ?? '',
    helmet?.style?.toString() ?? '',
  ]
    .filter(Boolean)
    .join('\n    ');

  return { html, head };
}
