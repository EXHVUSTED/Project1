import React from 'react';
import s from "./Header.css";

export default function Header() {
  return (
    <header className='header'>
      <div className="headertext">
        <div class="link" className='home'>
          <a href='/' className='logo'></a>
          <ul class="link" className='navigation'>
            <a href='/Examples'>Arbeitsbeispiele</a>
            <a href='/AboutUs'>Uber uns</a>
            <a href='/PriceList'>PriceList</a>
            <a href="/Feedback">оформить заказ</a>
          </ul>
        </div>
      </div>
      
    </header>    
  )
}