
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appcontextprovider from './appcontext/Appcontext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter basename="/BlogsApp">    
          <Appcontextprovider>
             <App />
          </Appcontextprovider>
     </BrowserRouter>
)
//VVVVVVVV IMPORTANT FOR ROUTERS TO DEPLOY IN GITHUB PAGES YOU NEED TO ADD BASENAME IN BROWSEROUTER WHICH MATCHS WITH REPO NAME OR IN VITE.CONFIG.JS BASE KEY VALUE