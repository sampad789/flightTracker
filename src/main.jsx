import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Arrivals from './components/Arrivals';

import {BrowserRouter ,Route,Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>

    <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="arrivals" element={ <Arrivals/> } />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
