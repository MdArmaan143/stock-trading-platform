import React from 'react'
import { Link } from 'react-router-dom';
 
function Team() {
    return ( 
        <div className='container '>
        <div className='row   '>

            <h1 className =  " text-center" >People</h1>


        </div>
        <div className='row   p-5  text-muted   ' style={{lineHeight:"1.8", fontSize:"1.1em"}}>
            <div className='col-6  p-5 text-center'>
                <img src='media\images\CEO.jpg' style={{width:"65%",borderRadius:"100%"}}></img>
                <h4 className='mt-4'>Md Armaan</h4>
                <h6>Founder, CEO</h6>

                
            </div>
            <div className='col-6   p-5'>
            <p>Armaan bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p >Connect on <Link to = "/" style={{textDecoration:"none"}}>Homepage</Link> / <a href = "/" style={{textDecoration:"none"}}>TradingQnA</a>  / <a href = "/" style={{textDecoration:"none"}}>Twitter</a> </p>

            </div>
        </div>
    </div>
     );
}

export default Team;