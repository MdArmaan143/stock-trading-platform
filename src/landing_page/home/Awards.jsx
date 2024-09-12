import React from 'react';

function Awards() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                {/* Image Section */}
                <div className='col-lg-6 col-12 p-5'>
                    <img
                        src='media/images/largestBroker.svg'
                        alt='Largest Broker'
                        className='img-fluid' // Responsive image
                        style={{ maxWidth: "100%" }} // Ensuring image doesn't exceed its container
                    />
                </div>
                
                {/* Text Section */}
                <div className='col-lg-6 col-12 p-5 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>
                        2+ million stock trading platform clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    
                    <div className='row'>
                        {/* Left Column */}
                        <div className='col-md-6 col-12'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        
                        {/* Right Column */}
                        <div className='col-md-6 col-12'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>

                    {/* Logos Section */}
                    <img
                        src='media/images/pressLogos.png'
                        alt='Press Logos'
                        className='img-fluid mt-4' // Responsive logos image
                        style={{ maxWidth: "100%" }} // Ensuring logos image fits the container
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;
