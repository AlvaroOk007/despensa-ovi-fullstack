import { createRoot } from 'react-dom/client'
import './variables/variables.css'
import App from './App.jsx'
import './index.css'
import './assets/fonts/fonts.css'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
