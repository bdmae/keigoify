import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

const container = document.getElementById('root');

if (!container) {
  throw new Error("Root element not found");
}

// Create a root using React 18's createRoot API
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);