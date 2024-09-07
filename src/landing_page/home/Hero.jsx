import React from 'react'

function Hero() {
    return ( 

        <div className='container mb-5'> 
          <div className='row text-center'>
          
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p> 
                <button className='p-3 btn btn-primary fs-5 mb-5 mt-4' style={{ width:"20%", margin:"0 auto"}}>Signup Now</button>
          </div>
        </div>
     );
}

export default Hero;