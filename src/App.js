import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import s from'./App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Examples from './Pages/Examples/Examples';
import Datenschutz from './Pages/Datenschutz/Datenschutz';
import PriceList from './Pages/PriceList/PriceList';
import AGB from './Pages/AGB/AGB';
import Feedback from './Pages/Feedback/Feedback';

function App () {
  return (  
    <div className="page">
    <Router>
      <Header className='header'/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Examples' element={<Examples/>}/>
          <Route path='/PriceList' element={<PriceList/>}/>
          <Route path='/Datenschutz' element={<Datenschutz/>}/>
          <Route path='/AGB' element={<AGB/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
        </Routes>
      <Footer className='footer'/>
    </Router>
    </div>
  );
}

export default App;
