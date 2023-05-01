import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChangeThemeContext } from './pages/context/ChangeThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChangeThemeContext>
      <App />
    </ChangeThemeContext>
  </React.StrictMode>
)
