import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SkateboardProvider } from './context/SkateboardContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SkateboardProvider>
      <App />
    </SkateboardProvider>
  </React.StrictMode>
);
