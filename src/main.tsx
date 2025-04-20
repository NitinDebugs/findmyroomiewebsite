
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a root element to render the app
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Apply overflow fixes to both root element and document body
rootElement.classList.add("overflow-fix");
document.body.classList.add("overflow-fix");

// Ensure viewport meta tag exists
const viewportMeta = document.createElement('meta');
viewportMeta.name = 'viewport';
viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

// Check if viewport meta already exists, if not add it
if (!document.querySelector('meta[name="viewport"]')) {
  document.head.appendChild(viewportMeta);
}

createRoot(rootElement).render(<App />);
