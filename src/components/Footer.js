import React from 'react'

import '../styles/Footer.scss'
import footerLogo from '../assets/footerLogo.svg'

function Footer () {
  return (
    <div className="footer">
      <div className="footerLogoContainer">
        <img src={footerLogo} alt="viDream" className="footerLogo"/>
      </div>
      <h1 className="footerText">With <span className="heart">{'\u2764'}</span></h1>
      <h1 className="footerText">&copy;A Vinayak Rugvedi @Geekskool</h1>
    </div>
  )
}

export default Footer
