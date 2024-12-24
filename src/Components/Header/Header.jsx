import React from 'react';
import s from "./Header.css";

export default function Header() {
  return (
    <header className='header'>
      <div className="headertext">
        <div class="link" className='home'>
          <a href='/' className='logo'></a>
          <ul class="link" className='navigation'>
            <a href='/Examples'>Examples</a>
            <a href='/AboutUs'>About us</a>
            <a href='/PriceList'>Price List</a>
            <a href="/Feedback">Feedback</a>
          </ul>
        </div>
      </div>
      
    </header>    
  )
}