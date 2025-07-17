import React from 'react';
import Hero from "./Hero";
import RightImage from './rightImage';
import LeftImage from './leftImage';
import RightImage2 from './rightImage2';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
       <Hero />
       <LeftImage imageUrl="media\images\kite.png" productName="Kite" ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." trydemo="https://kite-demo.zerodha.com/dashboard" learnmore="" gogglePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&pli=1" appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" />


       <RightImage imageUrl="media\images\console.png" productName="Console" ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" />


       <LeftImage imageUrl="media\images\coin.png" productName="Coin" ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." trydemo="https://kite-demo.zerodha.com/dashboard" learnmore="" gogglePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&pli=1" appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" />

       <RightImage2 imageUrl="media\images\kiteconnect.png" productName="Kite Connect API" ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore=""/>


       <LeftImage imageUrl="media\images\varsity.png" productName="Kite" ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." trydemo="https://kite-demo.zerodha.com/dashboard" learnmore="" gogglePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&pli=1" appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" />
      
       <p className='text-center mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
        </>
     );
}

export default ProductPage;