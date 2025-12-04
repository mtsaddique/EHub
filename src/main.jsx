import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Footer.css'
import './Header.css'
import './Home.css'
import './About.css'
import './Service.css'
import './Contact.css'
import './Product.css'
import App from './App.jsx'
import Home from './Components/Pages/Home.jsx'
import About from './Components/Pages/About.jsx'
import Contact from './Components/Pages/Contact.jsx'
import Services from './Components/Pages/Service.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Components/Pages/Product.jsx'
import ViewDetail from './Components/PopUp/ViewDetail.jsx'

const Rouutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="product" element={<Product/>} >   
        </Route>
        <Route path="viewdetail/:type/:id" element={<ViewDetail />} />
      </Route>
    </Routes>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/EHub">
      <Rouutes />
    </BrowserRouter>
  </StrictMode>,
)
