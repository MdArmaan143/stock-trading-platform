import React from 'react'

function Universe() {
  return (

    <div className='container mt-5'>
      <div className='row text-center'>
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-3 mt-5"  >
          <img src='media\images\zerodhafundhouse.png' style={{width:"45%"}}></img>
          <p className='mt-3 text-muted'  style={{fontSize:"13px"}}>Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.

          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media\images\sensibullLogo.svg' style={{width:"50%"}}></img>
          <p className='mt-3 text-muted'  style={{fontSize:"13px"}}>Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media\images\tijori.svg' style={{width:"30%"}}></img>
          <p className='mt-2 text-muted'  style={{fontSize:"13px"}}>Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.

          </p>
        </div>




      </div>
      <div className='row text-center' >
        <div className="col-4  p-3 mt-5">
          <img src='media\images\streak-logo.png' style={{width:"40%"}}></img>
          <p className='mt-3 text-muted'  style={{fontSize:"13px"}}>
            Systematic trading platform
            that allows you to create and backtest
            strategies without coding.

          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img src='media\images\smallcase-logo.png' ></img>
          <p className='mt-3 text-muted'  style={{fontSize:"13px"}}>

            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img src='media\images\dittoLogo.png' style={{width:"30%"}}></img>
          <p className='mt-3  text-muted' style={{fontSize:"13px"}}>Personalized advice on life
            and health insurance. No spam
            and no mis-selling.

          </p>
        </div>
        <button className='p-3 btn btn-primary fs-5 mb-5 mt-4' style={{ width:"20%", margin:"0 auto"}}>Sign up for free</button>

      </div>
    </div>
  );
}

export default Universe;