import React from 'react';

function Stats() {
    return (
        <div className="container p-5">
            <div className="row p-5">
                {/* Text Section */}
                <div className="col-lg-6 col-12 p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="mb-4 text-muted">
                        That's why 1.5+ crore customers trust Stock Trading Platform with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="mb-4 text-muted">
                        No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your pace, the way you like.
                    </p>

                    <h2 className="fs-4">The Stock trading universe</h2>
                    <p className="mb-4 text-muted">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className="fs-4">Do better with money</h2>
                    <p className="mb-4 text-muted">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                {/* Image and Links Section */}
                <div className="col-lg-6 col-12 p-5">
                    <img
                        src="media/images/ecosystem.png"
                        alt="Ecosystem"
                        className="img-fluid mb-4" // Ensures image is responsive
                        style={{ maxWidth: "100%" }} // Ensures the image doesn't exceed container width
                    />
                    <div className="text-center">
                        <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
                            Explore our products <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            Try Kite demo <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
