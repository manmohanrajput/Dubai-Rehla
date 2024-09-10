import React from 'react';
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'

function Herosection() {
  return (
    <section className="hero"  style={{ backgroundImage: `url(${'../../images/bg-image.webp'})` }}>
      <div className="container">
        <div className="hero_inner">
          <h1>Rehla App is The Best App For Booking Ride And Sharing Trips</h1>
          <p>
            Rehla is a ride sharing and a ride hailing service that links between <br /> passengers and vehicle owners heading to the same destination.
          </p>
          <div className="app_store">
            <a href="#"><img src='../../images/App-Store.webp' alt="App Store" /></a>
            <a href="#"><img src='../../images/Play-Store.webp' alt="Play Store" /></a>
          </div>
        </div>
        <div className="hero_img">
          <img src='../../images/images.webp' alt="Rehla App is The Best App image" />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
