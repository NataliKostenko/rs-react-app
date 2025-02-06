import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootElemet = document.getElementById('root');

if (rootElemet) {
  createRoot(rootElemet).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
