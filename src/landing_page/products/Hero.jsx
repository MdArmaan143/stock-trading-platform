import React from 'react'

function Hero() {
    return ( 
        <div className='container mb-5 mt-5 p-3 border-bottom'> 
        <div className='row text-center mt-5 p-3'>
        
              <h1  style={{fontSize:"2.8rem"}}>Technology</h1>
              <h3 className='mt-3 fs-4 text-muted'>Sleek, modern, and intuitive trading platforms
              </h3> 
              <p className='mt-3 mb-5'>Check out our <a href='#'style={{textDecoration:"none"}} >investment offerings <i class="fas fa-arrow-right"></i></a></p>
             
        </div>
      </div>
     );
}

export default Hero;