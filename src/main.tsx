import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.tsx';
import PageNotFound from './PageNotFound.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import Details from './Details.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
const rootElemet = document.getElementById('root');

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    ),
    children: [
      {
        path: 'details/:id',
        /*   loader: ({ params }) => {
            const url = `https://swapi.dev/api/planets/${params.id}/`;
            return fetch(url);
          }, */
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
