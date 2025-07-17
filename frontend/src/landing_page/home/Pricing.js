import React from 'react';


function Pricing() {
    return ( 
        <div className='container'>
         <div className='row'>
         <div className='col-1'></div>    
            <div className='col-4'>
                 <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                 <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                 <a href='' style={{textDecoration:"none"}}>see pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        
            <div className='col-6'>
                <div className='row text-center'>
                  <div className='col-4 p-2'>
                     <img src='media\images\pricing-eq.svg' style={{height:"40%" }}/>
                     <p className='fs-10 text-muted'>Free account opening</p>
                  </div>
                  <div className='col-4 p-2'>
                     <img src='media\images\pricing-eq.svg'  style={{height:"40%"}}/>
                     <p className='fs-10 text-muted'>Free equity delivery and direct mutual funds</p>
                  </div>
                  <div className='col-4 p-2'>
                     <img src='media\images\other-trades.svg'  style={{height:"40%"}}/>
                     <p className='fs-10 text-muted'> Intraday and F&O</p>
                  </div>
                </div>
            </div>
         </div>
        </div>
     );
}

export default Pricing;