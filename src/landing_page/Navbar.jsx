import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div class="container p-2">
          <Link class="navbar-brand" to ="/"><img src='media\images\logo.svg' alt='Logo' style={{width:"25%"}}></img></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
                <Link class="nav-link active" to ="signup">Signup</Link>
             </li>
              <li class="nav-item">
                <Link class="nav-link  active" to ="about">About</Link>
             </li>
             <li class="nav-item">
                <Link class="nav-link active " to ="product">Products</Link>
             </li>
             <li class="nav-item">
                <Link class="nav-link active" to="pricing">Pricing</Link>
             </li>
             <li class="nav-item">
                <Link class="nav-link active" to="support">Support</Link>
             </li>
             <li class="nav-item">
                <a class="nav-link active" href="#" style={{width:"70%"}}><i class="fa-solid fa-bars"></i></a>
             </li>
            </ul>
            
          </div>
        </div>
      </nav>
      );
}

export default Navbar;