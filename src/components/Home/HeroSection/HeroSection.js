import React from 'react';
import './HeroSection.css';
import sliderOne from '../../../images/banner1.png';

const HeroSection = () => {
    return (
        <main className="hero-container">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                         <div className="text-slider mt-5">
                    <h1 className="hero-main-text pt-md-4 ms-md-5 "
                 >LIVE FOR <br />
                <span className="text-white hero-text">FASHION</span></h1>
                <p className="fs-2 text-white ms-md-5">SAVE UPTO 50%</p>
                <button className="btn-brand mt-md-2 ms-md-5">Shop Now</button>
            </div>
      <img src={sliderOne} class="d-block w-100 sliderImg" alt="..."/>
      
    </div>
  </div>
</div>
        </main>
    );
};

export default HeroSection;