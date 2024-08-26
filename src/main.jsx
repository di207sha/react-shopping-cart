import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Profile from './components/profile'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {<Profile></Profile>} */}
    <App />
    
  </StrictMode>,
)
