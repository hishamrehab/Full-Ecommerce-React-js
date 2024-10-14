import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ScrollToTop } from './components/index.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterProvider } from './context/FilterContext.jsx'
import { CartProvider } from './context/CartContext.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
          <App />
        </FilterProvider>
      </CartProvider>


    </Router>
  </StrictMode>,
)
