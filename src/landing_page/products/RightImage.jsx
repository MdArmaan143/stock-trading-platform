import React from 'react'

function RightImage({productName,productDescription,learnMore,imageURL}) {
    return (
      <div className='container  p-3'>
      <div className='row mt-5 '>

      <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>    
          <a href={learnMore}style={{textDecoration:"none"}} > learnMore<i class="fas fa-arrow-right"></i></a>
          

               
            </div>
          </div>





        <div className='col-6  '>
          <img src={imageURL} />
        </div>
   
      
      </div>
    </div>




      );
}

export default RightImage;