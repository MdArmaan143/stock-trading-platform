import React from 'react'
import Navbar from '../Navbar';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Universe from './Universe';
import LeftImage from './LeftImage';
import RightImage from './RightImage';

function ProductPage() {
    return ( 
    <>    
       <Navbar/>
       <Hero/>
       <LeftImage/>
       <RightImage/>
       <Universe/>
       <OpenAccount/>
       <Footer/>
       </>
     );
}

export default ProductPage;