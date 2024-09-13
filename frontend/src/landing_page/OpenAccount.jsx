import React from 'react';

function OpenAccount() {
    return (
        <div className="container mb-5">
            <div className="row text-center">
                {/* Title */}
                <h1 className="mt-5">Open a Stock Trading Platform account</h1>
                
                {/* Description */}
                <p className="mt-3">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>

                {/* Signup Button */}
                <div className="col-12 d-flex justify-content-center">
                    <button className="p-3 btn btn-primary fs-5 mb-5 mt-3" style={{ width: "100%", maxWidth: "300px" }}>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
