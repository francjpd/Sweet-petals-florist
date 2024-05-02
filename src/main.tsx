import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Lets reset our browser's default css to align it with MUI */}
    <App />
  </React.StrictMode>
)
