import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { SenhaProvider } from './context/senha/SenhaProvider.jsx'
import { EmailProvider } from './context/email/EmailProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailProvider>
      <SenhaProvider>
      <App />
      </SenhaProvider>
    </EmailProvider>
  </StrictMode>,
)
