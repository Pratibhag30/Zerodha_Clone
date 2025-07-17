import React from 'react';


function Hero() {
    return ( 
        <div className='container mb-5'>
            <div className='row p-6 text-center'>
                <img src='media/images/homeHero.png' alt="img" className='mb-5' />
                <h1 className='mt-3'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-2 fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}} >Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;