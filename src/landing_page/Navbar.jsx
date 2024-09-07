import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light border-bottom">
        <div class="container p-2">
          <a class="navbar-brand" href="#"><img src='media\images\logo.svg' alt='Logo' style={{width:"23%"}}></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="#">Signup</a>
             </li>
              <li class="nav-item">
                <a class="nav-link  active" href="#">About</a>
             </li>
             <li class="nav-item">
                <a class="nav-link active " href="#">Products</a>
             </li>
             <li class="nav-item">
                <a class="nav-link active" href="#">Pricing</a>
             </li>
             <li class="nav-item">
                <a class="nav-link active" href="#">Support</a>
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