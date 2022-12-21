import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import WebMonitor from "web-monitor"
const m = new WebMonitor("", "", "get", "xhr", 1);
m.start();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
