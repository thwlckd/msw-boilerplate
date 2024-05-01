import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { worker } from './mocks/browser.ts';
import './index.css';

worker.start({ onUnhandledRequest: 'bypass' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
