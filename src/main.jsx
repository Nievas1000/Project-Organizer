import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProjectProvider } from './context/project.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId='189304055061-1m8kjtpmnu9t1uh56mjmspd72v85n0h4.apps.googleusercontent.com'>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
)
