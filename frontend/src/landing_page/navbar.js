import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"white"}}>
                <div class="container">
                    <Link class="navbar-brand" to={'/'}>
                        <img src='media/images/logo.svg' alt='logo' style={{width:"25%" ,marginLeft:"10%"}}/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                        <form class="d-flex" role="search" style={{marginRight:"15%"}}>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/signup'}>Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to={'/about'}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to={'/products'}>Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to={'/pricing'}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to={'/support'}>Support</Link>
                            </li>

                        </ul>
                        </div>
                        </form>
                    </div>
            </nav>
    );
}

export default Navbar;