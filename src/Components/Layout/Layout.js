import React from 'react'
import Crousel from '../Crousel/Crousel'
import Banner from '../Landingpage/Banner'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Foundation from '../Landingpage/Foundation'
import Testimonials from '../Landingpage/Testimonials'
import OurService from '../Landingpage/OurService'
import HealingProducts from '../Landingpage/HealingProducts'
import SidebarForm from '../Header/SidebarForm'

function Layout() {
  return (
    <div>
      <SidebarForm/>
        <Navbar/>
        <Crousel/>
        <Banner/>
        <OurService/>
        <Foundation/>
        <Testimonials/>
        <HealingProducts/>
        <Footer/>
    </div>
  )
}

export default Layout