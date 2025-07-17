import React from 'react';

function Hero() {
    return ( 
       <div className='container text-center'>
        <h1 className=' fs-2 ' style={{marginTop:"5%"}}>Charges</h1>
        <p className='fs-8 text-muted' style={{marginBottom:"10%"}} >List of all charges and taxes</p>
        <div className='row Pricing_hero'>
            <div className='col-2'></div>
            <div className='col-3'>
                <img src="media\images\pricing-eq.svg" className='Poduct_Hero_img'/>
                <h4>Free equity delivery</h4>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-3'>
                <img src="media\images\other-trades.svg" className='Poduct_Hero_img'/>
                <h4>Intraday and F&O trades</h4>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-3'>
                <img src="media\images\pricing-eq.svg" className='Poduct_Hero_img'/>
                <h4>Free direct MF</h4>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
            <div className='col-1'></div>
        </div>
       </div>
     );
}

export default Hero;