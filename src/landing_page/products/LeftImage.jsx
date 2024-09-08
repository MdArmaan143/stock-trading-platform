import React from 'react'

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  applePlay,

}) {
  return (
    <div className='container  p-3 '>
      <div className='row mt-5'>
        <div className='col-6 '>
          <img src={imageURL} />
        </div>
   
        
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>    
          <a href={tryDemo}style={{textDecoration:"none"}} >tryDemo <i class="fas fa-arrow-right"></i></a>
          <a href={learnMore}style={{textDecoration:"none",marginLeft:"50px"}} >learnMore <i class="fas fa-arrow-right"></i></a>

               
            </div>
          <div className='my-3'> <a href={googlePlay}><img src='media\images\googlePlayBadge.svg'></img></a>
            <a href={applePlay } style={{marginLeft:"50px"}}><img src='media\images\appstoreBadge.svg'></img></a></div>
        </div>
      </div>
    </div>



  );
}

export default LeftImage;