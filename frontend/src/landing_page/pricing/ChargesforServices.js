import React from 'react';
 function ChargesForServices() {
    return ( 
        <div className='container chargesAcc'>
            <h4 className='mb-4 fs-5'>Charges for optional value added services</h4>
            <table className='charge'>
              <thead>
                <tr style={{borderBottom:"0.1px solid grey"}}>
                    <td>Services</td>
                    <td>Billing Frequency</td>
                    <td>Charges</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Ticketape</td>
                    <td>Monthly/Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                    <td>Smallcase</td>
                    <td>per transaction</td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                    <td>Kite connect</td>
                    <td>Monthly</td>
                    <td>Connect: 2000 | Historical: 2000</td>
                </tr>
              </tbody>
            </table>
        </div>
     );
 }
 
 export default ChargesForServices;