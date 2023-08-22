import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

const domNode = document.getElementById('root')!; // ! due to root always existing in a react app
const root = ReactDOM.createRoot(domNode) 

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
