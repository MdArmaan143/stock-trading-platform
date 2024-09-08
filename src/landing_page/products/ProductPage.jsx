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

      <Hero />
      <LeftImage imageURL="media\images\kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" applePlay="" />
      <RightImage productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" imageURL="media\images\console.png"/>
      <LeftImage imageURL="media\images\coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" applePlay="" />
      <RightImage productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" imageURL="media\images\kiteconnect.png"/>
      <LeftImage imageURL="media\images\varsity-products.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" applePlay="" />

      <p className='mt-5 mb-5 text-center fs-4'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
     
      <Universe />
   

    </>
  );
}

export default ProductPage;






