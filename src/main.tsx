
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a root element to render the app
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Apply overflow fix to the root element
rootElement.classList.add("overflow-fix");

createRoot(rootElement).render(<App />);
