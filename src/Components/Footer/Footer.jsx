import React from 'react'
import s from "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footertext'>
        <div className='leftBlock'>
          <h1>Kontaktieren Sie uns</h1>
          <h1>+49 176 77874953</h1>
          <h1><a href='mailto:Kuliasovegor@gmail.com'>Kuliasovegor@gmail.com</a></h1>
          <div className="sociallinks">
            <div className='sociallinksimage'>
              <a href='https://www.instagram.com/ek_glanz?utm_source=qr' className='instagram'></a>
              <a href='https://api.whatsapp.com/send?phone=+4917677874953' className='whatsapp'></a>
            </div>
            <div className='sociallinkstxt'>
              <a href='https://www.instagram.com/ek_glanz?utm_source=qr' className='instagramtxt' >Instagram</a>
              <a href='https://api.whatsapp.com/send?phone=+4917677874953' className='whatsapptxt'>Whatsapp</a>
            </div>
          </div>
          <div className='DatenschutzAGB'>
            <a href="/Datenschutz">Datenschutz</a>
            <p></p>
            <a href="/AGB">AGB</a>
          </div>
        </div>
        <div className='rightBlock'>
          <h1>
          Adresse
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
