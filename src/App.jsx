import React from 'react'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'

import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <div className="hello" >
        <div className="headerlayout" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
          <Header />
        </div>

        <div className="content" style={{ marginTop: "60px" }}>
          <Outlet />
        </div>
        <div className="footerLayout">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
