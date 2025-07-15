import { createRoot } from 'react-dom/client'
import './variables/variables.css'
import App from './App.jsx'
import './index.css'
import './assets/fonts/fonts.css'
import { BrowserRouter } from 'react-router-dom'
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
