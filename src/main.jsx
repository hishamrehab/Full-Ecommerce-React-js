import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ScrollToTop } from './components/index.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { FilterProvider } from './context/FilterContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop />
        <App />
      </FilterProvider>
    </Router>
  </StrictMode>,
)
