import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProjectProvider } from './context/project.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProjectProvider>
    <App />
  </ProjectProvider>
)
