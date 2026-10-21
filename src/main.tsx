import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthProvider } from './features/auth/AuthContext.tsx'
import { SubscriptionProvider } from './features/auth/Subscription/SubscriptionContext.tsx'
import { HashRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <AuthProvider> <SubscriptionProvider><HashRouter><App /></HashRouter> </SubscriptionProvider> </AuthProvider>
  </StrictMode>,
)
