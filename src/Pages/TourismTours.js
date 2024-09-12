import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import '../css/style.css';
import '../css/reset.css';
import '../css/responsive.css';
import '../css/glightbox.css';
import { GetTouristAreas } from '../services/tripService';
import { useNavigate } from 'react-router-dom';

function TourismTours() {
   const [tours, setTours] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      getTouristAreas();
   }, []);

   const getTouristAreas = async () => {
      let { data } = await GetTouristAreas();
      setTours(data?.model);
   };

   return (
      <>
         <Header />
         <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }} id='tourism-tours'>
            <div className="container">
               <div className="banner_head">
                  <h1>Tourism Tours</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo congue purus pretium ligula </p>
               </div>
               <div className="bredcrub">
                  <a href="index.html" target="_self"> Home </a><span> {'>'}</span> <p>Tourism Tours</p>
               </div>
            </div>
         </section>
         <section className="our_team gallery_team tourism_tours ptb100">
            <div className="container">
               <div className="sec_head">
                  <h2><span>Rehla</span> Tourism Tours </h2>
                  <p>Fully layered dolor sit amet, nobis id expedita <br /> dolores officiis laboriosam.</p>
               </div>
               <div className="team_inner tourism_inner pt60">
                  {tours.map((tour, key) => (
                     <div className="card_box" key={key} onClick={() => navigate('/city-tour-al-ula')}>
                        <img 
                           src={tour?.Image} 
                           alt={tour?.Name} 
                        />
                        <div className="card_details">
                           <h3>{tour?.Name}</h3>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
}

export default TourismTours;
