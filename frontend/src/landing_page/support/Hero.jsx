import React from 'react'

function Hero() {
    return (

        <section className='container-fluid' id='supportHero'>
            <div className=' p-3 ' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='#' >Track Tickets</a>
            </div>


            <div className='row  p-3 m-5'>

                <div className='col-6  p-3'>
                    <h1 className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h1>

                    <input class="form-control me-2 mb-4" type="search" placeholder="Eg: how do i activate F&O, why is my order getting rejected..." aria-label="Search" />
                    <a href='#'>Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Kite user manual</a>


                </div>
                <div className='col-6  p-4'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol >
                   <li><a href='#'>Current Buybacks - September 2024</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
                   <li><a href='#'> 
                   Adjustment of F&O contracts of VEDL due to dividend</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;