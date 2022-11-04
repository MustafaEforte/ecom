import React from 'react'
import Details from './Details'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Details/>
      <Footer/>
    </div>
  )
}

export default Layout
