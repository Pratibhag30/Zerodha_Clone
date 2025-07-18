import React from 'react';

function Team() {
    return ( 
        <div className='container'>
        <div className='row pd-5 mt-5'>
            <h1 className=' text-center mt-3'>People</h1>
        </div>

        <div className='row pd-5 mt-5' style={{lineHeight:"1.8"}}>
            <div className='col-4 para_div text-center mt-4' style={{marginLeft:"15%"}}>
               <img src='media\images\nithinKamath.jpg'  style={{height:"50%" , borderRadius:"50%"}}/>
               <h4 className='mt-3'>Nithin Kamath</h4>
               <p> Founder, CEO</p>
            </div>
            <div className='col-4 para_div' style={{marginRight:"10%"}} >
                <p className='mt-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA </a> / <a href='#'>Twitter</a> </p>
            </div>
        </div>
    </div>
     );
}

export default Team;