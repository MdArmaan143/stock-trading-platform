import React from 'react'
import {Link} from "react-router-dom"

function NotFoundPage() {
    return ( 
        <div className='container mb-5'> 
        <div className='row text-center'>
        
              <h1 className='mt-5'>404 Not Found</h1>
              <p className='mt-3'>Sorry, the page you are looking for does not exist.
              </p> 
            
        </div>
      </div>
     );
}

export default NotFoundPage;