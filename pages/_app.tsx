import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NextSEO from '../components/NextSEO';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 60,
      cacheTime: 60 * 1000 * 60,
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...NextSEO} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
