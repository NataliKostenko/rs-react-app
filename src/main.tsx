import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.tsx';
import PageNotFound from './PageNotFound.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

const rootElemet = document.getElementById('root');

if (rootElemet) {
  createRoot(rootElemet).render(
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );
}
