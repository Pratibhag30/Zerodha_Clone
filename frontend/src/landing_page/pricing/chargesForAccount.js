import React from 'react';
 function ChargesForAccount() {
    return ( 
        <div className='container chargesAcc'>
            <h4 className='mb-4 fs-5'>Charges for account opening</h4>
            <table className='charge'>
              <thead>
                <tr style={{borderBottom:"0.1px solid grey"}}>
                    <td>Type of account</td>
                    <td>Charges</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Online Account</td>
                    <td>free</td>
                </tr>
                <tr>
                    <td>Offline Account</td>
                    <td>free</td>
                </tr>
                <tr>
                    <td>NRI account (offline only)</td>
                    <td>₹ 500</td>
                </tr>
                <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
        </div>
     );
 }
 
 export default ChargesForAccount;