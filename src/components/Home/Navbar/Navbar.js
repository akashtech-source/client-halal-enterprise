import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../images/logo.png';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img style={{width: '200px'}} src={logo} alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav m-auto">
                        <a class="nav-link active me-4" aria-current="page" href="/">Home</a>
                        <a class="nav-link active me-4" href="/">My Account</a>
                        <a class="nav-link active me-4" href="/">Shop</a>
                        <a class="nav-link active me-4" href="/">Login</a>
                        <a class="nav-link active me-4" href="/">About Us</a>
                        <a class="nav-link active me-4" href="/">Contact Us</a>
                        <FontAwesomeIcon className="cart-state-icon" icon={faShoppingBag} />
                        <span class="cart-state">4</span>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;