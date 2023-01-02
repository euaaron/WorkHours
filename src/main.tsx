import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';
import App from './app/App'

import GlobalStyles from './global.styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
    <Analytics />
  </React.StrictMode>
)
