import React from 'react';

function Hero() {
    return (
        <div className='container mb-5'>
            <div className='row text-center'>
                <div className='col-12'>
                    <img
                        src='media/images/homeHero.png'
                        alt='Hero Image'
                        className='img-fluid mb-5' // img-fluid se image responsive ho jayegi
                        style={{ maxWidth: "100%", height: "auto" }} // 100% width for small devices
                    />
                </div>
                <div className='col-12'>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p className='mt-2'>
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button
                        className='btn btn-primary fs-5 mb-5 mt-4'
                        style={{ maxWidth: "250px", width: "100%" }} // Button 100% width on small devices
                    >
                        Signup Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
