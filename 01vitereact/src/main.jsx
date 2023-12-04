import React from 'react'

import App from './App.jsx'
import ReactDOM from 'react-dom/client'

function Myapp() {
  return (
    <div>
      <h1>custom App !</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myapp />
  </React.StrictMode>,
)
