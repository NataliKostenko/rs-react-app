import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.tsx';
import PageNotFound from './PageNotFound.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import Details from './Details.tsx';

const rootElemet = document.getElementById('root');

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    children: [
      {
        path: 'details/:id',
        loader: ({ params }) => {
          const url = `https://swapi.dev/api/planets/${params.id}/`;
          return fetch(url);
        },
        element: <Details />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

if (rootElemet) {
  createRoot(rootElemet).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
