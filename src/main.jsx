import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Footer.css'
import './Header.css'
import './Home.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
