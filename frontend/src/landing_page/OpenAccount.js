import React from 'react'
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h4 className='m-4'>Open a Zerodha account</h4>
                <p className="mb-5">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup"><button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin :"0 auto"}}>Sign up for Free</button></Link>
            </div>
        </div>
    );
}

export default OpenAccount;