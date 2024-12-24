import React from 'react'
import s from "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footertext'>
        <div className='leftBlock'>
          <h1>Contact Us!</h1>
          <h1>+49 999 999999</h1>
          <div className="sociallinks">
            <div className='sociallinksimage'>
              <a href='https://www.instagram.com' className='instagram'></a>
              <a href='https://api.whatsapp.com' className='whatsapp'></a>
            </div>
            <div className='sociallinkstxt'>
              <a href='https://www.instagram.com' className='instagramtxt' >Instagram</a>
              <a href='https://api.whatsapp.com' className='whatsapptxt'>Whatsapp</a>
            </div>
          </div>
          <div className='privacy policy'>
            <a href="/Datenschutz">Privacy Policy</a>
            <p></p>
            {/* <a href="/AGB">AGB</a> */}
          </div>
        </div>
        <div className='rightBlock'>
          <h1>
          Address
          </h1>
          <h1>
            <a href='https://maps.app.goo.gl/ndHCFGBuZSFadyKH9'>
            Einsteiring 26 90453 Nürnberg</a>
          </h1>
        </div>
        
      </div>
    </footer>
    
  )
}
