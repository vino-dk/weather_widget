import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render( // ! due to root always existing in a react app
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
