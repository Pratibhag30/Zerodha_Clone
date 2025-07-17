import React from 'react';

function universe() {
    return ( 
       <div className='container text-center'>
        <h1 >The Zerodha Universe</h1>
        <p className='mb-5 mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='row mb-4'>
            <div className='col-2'></div>
            <div className='col-3'>
                <img src="media\images\zerodhaFundhouse.png" style={{width:"40%"}}/><br/>
                <a href="https://sensibull.com/" style={{textDecoration:"none"}}><p className='mt-3 text-muted' style={{color:"black" , fontSize:"0.7rem"}}>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points loike open interest , FII/DII, and more.</p></a>
            </div>
            <div className='col-3'>
                <img src="media/images/sensibullLogo.svg" style={{width:"40%"}} /><br/>
                <a href="https://sensibull.com/" style={{textDecoration:"none"}}><p className='mt-3 text-muted' style={{color:"black" , fontSize:"0.7rem"}}>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points loike open interest , FII/DII, and more.</p></a>
            </div>
            <div className='col-3'>
                <img src="media\images\tijori.svg" style={{width:"30%"}} /><br/>
                <a href="https://sensibull.com/" style={{textDecoration:"none"}}><p className='mt-2 text-muted' style={{color:"black" , fontSize:"0.7rem"}}>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points loike open interest , FII/DII, and more.</p></a>
            </div>
            <div className='col-2'></div>
        </div>

        <div className='row mb-5'>
        <div className='col-2'></div>
            <div className='col-3'>
                <img src="media\images\streakLogo.png" style={{width:"30%"}}  /><br/>
                <a href="https://sensibull.com/" style={{textDecoration:"none"}}><p className='mt-3 text-muted' style={{color:"black" , fontSize:"0.7rem"}}>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points loike open interest , FII/DII, and more.</p></a>
            </div>
            <div className='col-3'>
                <img src="media\images\smallcaseLogo.png" style={{width:"40%"}} /><br/>
                <a href="https://sensibull.com/" style={{textDecoration:"none"}}><p className='mt-3 text-muted' style={{color:"black" , fontSize:"0.7rem"}}>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points loike open interest , FII/DII, and more.</p></a>
            </div>
            <div className='col-3'>
                <img src="media\images\dittoLogo.png" style={{width:"30%"}} /><br/>
                <a href="https://sensibull.com/" style={{textDecoration:"none"}}><p className='mt-3 text-muted' style={{color:"black" , fontSize:"0.7rem"}}>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points loike open interest , FII/DII, and more.</p></a>
            </div>
        </div>
        <button className='btn btn-primary p-2 fs-6 mb-5' style={{width:"12%" , margin:"0 auto"}} >Sign up for free</button>
       </div>
     );
}

export default universe;