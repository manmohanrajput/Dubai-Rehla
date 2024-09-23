import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useTranslation } from 'react-i18next';

function Notifications() {
   const { t } = useTranslation();

  return (
   <>
    <Header/>
    <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>{t('header.notification')}</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> {t('header.home')} </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>{t('header.notification')}</p>
         </div>
      </div>
   </section>

    <section class="notification ptb60">
      <div class="notification_box_grid">
         <div class="notification_grid">
            <div class="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div class="notification_content">
                  <div class="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div class="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="notification_grid">
            <div class="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div class="notification_content">
                  <div class="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div class="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="notification_grid">
            <div class="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div class="notification_content">
                  <div class="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div class="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="notification_grid">
            <div class="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div class="notification_content">
                  <div class="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div class="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="notification_grid">
            <div class="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div class="notification_content">
                  <div class="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div class="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
    <Footer/>
   </>
  )
}

export default Notifications