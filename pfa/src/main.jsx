import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from "./pages/login/Login.jsx"
import { AuthProvider } from './store/auth-store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
)
