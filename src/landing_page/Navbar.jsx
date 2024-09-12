import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white border-bottom">
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img className="mx-5" src="media/images/logo.svg" alt="Logo" style={{ width: "20%" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="support">Support</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" style={{ width: "70%" }}>
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
