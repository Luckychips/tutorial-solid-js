/* @refresh reload */
import { render } from 'solid-js/web';
import { ErrorBoundary, Suspense } from 'solid-js';
import {
  QueryClient,
  QueryClientProvider,
  MutationCache,
  QueryCache,
} from '@tanstack/solid-query';

import './index.css';
import App from './App';

const root = document.getElementById('root');
const client = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error: any, variables: any, context: any, mutation: any) => {
      if (error.response?.status >= 500) {
        const res = error.response?.data;

      } else {
        if (error.response?.status === 401) {
          console.log(error);
        }
      }
    },
  }),
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      if (error.response?.status >= 500) {
        const res = error.response?.data;
      } else {
        if (error.response?.status === 401) {
          console.log(error);
        }
      }
    },
  }),
});

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}



render(() => (
  <ErrorBoundary fallback={<div>Error...</div>}>
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Suspense>
  </ErrorBoundary>
), root!);
