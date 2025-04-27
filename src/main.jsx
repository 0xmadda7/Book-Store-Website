import { createRoot } from 'react-dom/client';
import App from './App'; // Changed import from App.tsx to App
import './index.css';

createRoot(document.getElementById("root")).render(<App />);
