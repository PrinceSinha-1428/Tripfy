"use client";
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [showNav, setShownav] = useState(false);
    const handleNavShow = () => setShownav(true)
    const handleCloseNav = () => setShownav(false)
  return (
    <div>
      <Nav openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav}  />
    </div>
  )
}

export default ResponsiveNav
