import React from 'react'

function Hero() {
    return ( 
        <div className='container mt-5 ' >
            <div className='row text-center border-bottom mt-5  p-5'>
                <h1  style={{fontSize:"2.8rem"}}>Pricing</h1>
                <p className='mb-5 mt-3 fs-5 text-muted '>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className='row p-5 mt-5  text-center'>
                
                <div className='col p-4  '>
                    <img src="media\images\pricingEquity.svg" alt="0 img" style={{width:"70%"}} />
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    
                    </div>
                <div className='col p-4 '>
                <img src="media\images\other-trades.svg" alt="20 img" style={{width:"70%"}}/>
                <h1 className='fs-3'>Intraday and F&O trades</h1>
                <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                

                </div>
                <div className='col p-4 '>
                    <img src="media\images\pricingEquity.svg" alt="0 img" style={{width:"70%"}}/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                
            </div>
        </div>
     
     );
}

export default Hero;



