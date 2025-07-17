import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './landing_page/navbar';
import Footer from './landing_page/footer'
import Homepage from './landing_page/home/Homepage';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/About';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar />
      <Routes>
      
         <Route path='/' element={<Homepage/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>
         <Route path='/about' element={<AboutPage/>}></Route>
         <Route path='/pricing' element={<PricingPage/>}></Route>
         <Route path='/products' element={<ProductsPage/>}></Route>
         <Route path='/support' element={<SupportPage/>}></Route>
         
      </Routes>
      <Footer/>
    </BrowserRouter>
);


