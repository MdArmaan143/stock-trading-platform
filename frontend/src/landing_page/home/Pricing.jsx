import React from 'react';

function Pricing() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                {/* Pricing Info Section */}
                <div className="col-lg-4 col-12 mb-4">
                    <h1 className="fs-2 mb-3">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" style={{ textDecoration: "none" }}>
                        See pricing <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                {/* Spacer for larger screens */}
                <div className="col-lg-2 d-none d-lg-block"></div>

                {/* Pricing Boxes Section */}
                <div className="col-lg-6 col-12">
                    <div className="row text-center">
                        {/* Free Equity Delivery Box */}
                        <div className="col-md-6 col-12 p-3 border">
                            <h1 className="mb-3"><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>
                                Free equity delivery<br />
                                and direct mutual funds
                            </p>
                        </div>

                        {/* Intraday and F&O Box */}
                        <div className="col-md-6 col-12 p-3 border">
                            <h1 className="mb-3"><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and<br />F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
