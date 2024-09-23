import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { useTranslation } from 'react-i18next';


function MyTrip() {
   const { t } = useTranslation();

  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>{t('header.myTrips')}</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>{t('header.myTrips')}</p>
         </div>
      </div>
   </section>
   <section class="my_trip ptb100">
      <div class="container">
         <div class="trip_box">
            <div class="trip_head">
               <img src="images/my_trip/car.png" alt="car"/>
               <h2>Go trip <span> (565551#)</span></h2>
            </div>
            <div class="ribben sky">
               <span>Underway</span>
            </div>
            <ul class="trip_list">
               <li><img src="images/my_trip/list1.png" alt="list1"/><span>Saudi Saudi Arabia Jeddah</span></li>
               <li><img src="images/my_trip/list2.png" alt="list2"/><span>Kingdom of Saudi Arabia, Riyadh, King Saud Street</span></li>
            </ul>
            <div class="trip_bottom">
               <p>3- 3-2023 , 6 Am</p>
               <h3>12.500 KD</h3>
            </div>
         </div>
         <div class="trip_box">
            <div class="trip_head">
               <img src="images/my_trip/car.png" alt="car"/>
               <h2>Go trip <span> (565551#)</span></h2>
            </div>
            <div class="ribben yellow">
               <span>Scheduled</span>
            </div>
            <ul class="trip_list">
               <li><img src="images/my_trip/list1.png" alt="list1"/><span>Saudi Saudi Arabia Jeddah</span></li>
               <li><img src="images/my_trip/list2.png" alt="list2"/><span>Kingdom of Saudi Arabia, Riyadh, King Saud Street</span></li>
            </ul>
            <div class="trip_bottom">
               <p>3- 3-2023 , 6 Am</p>
               <h3>12.500 KD</h3>
            </div>
         </div>
         <div class="trip_box">
            <div class="trip_head">
               <img src="images/my_trip/car.png" alt="car"/>
               <h2>Go trip <span> (565551#)</span></h2>
            </div>
            <div class="ribben sky">
               <span>Underway</span>
            </div>
            <ul class="trip_list">
               <li><img src="images/my_trip/list1.png" alt="list1"/><span>Saudi Saudi Arabia Jeddah</span></li>
               <li><img src="images/my_trip/list2.png" alt="list2"/><span>Kingdom of Saudi Arabia, Riyadh, King Saud Street</span></li>
            </ul>
            <div class="trip_bottom">
               <p>3- 3-2023 , 6 Am</p>
               <h3>12.500 KD</h3>
            </div>
         </div>
         <div class="trip_box">
            <div class="trip_head">
               <img src="images/my_trip/car.png" alt="car"/>
               <h2>Go trip <span> (565551#)</span></h2>
            </div>
            <div class="ribben yellow">
               <span>Scheduled</span>
            </div>
            <ul class="trip_list">
               <li><img src="images/my_trip/list1.png" alt="list1"/><span>Saudi Saudi Arabia Jeddah</span></li>
               <li><img src="images/my_trip/list2.png" alt="list2"/><span>Kingdom of Saudi Arabia, Riyadh, King Saud Street</span></li>
            </ul>
            <div class="trip_bottom">
               <p>3- 3-2023 , 6 Am</p>
               <h3>12.500 KD</h3>
            </div>
         </div>
         <div class="trip_box">
            <div class="trip_head">
               <img src="images/my_trip/car.png" alt="car"/>
               <h2>Go trip <span> (565551#)</span></h2>
            </div>
            <div class="ribben sky">
               <span>Underway</span>
            </div>
            <ul class="trip_list">
               <li><img src="images/my_trip/list1.png" alt="list1"/><span>Saudi Saudi Arabia Jeddah</span></li>
               <li><img src="images/my_trip/list2.png" alt="list2"/><span>Kingdom of Saudi Arabia, Riyadh, King Saud Street</span></li>
            </ul>
            <div class="trip_bottom">
               <p>3- 3-2023 , 6 Am</p>
               <h3>12.500 KD</h3>
            </div>
         </div>
         <div class="trip_box">
            <div class="trip_head">
               <img src="images/my_trip/car.png" alt="car"/>
               <h2>Go trip <span> (565551#)</span></h2>
            </div>
            <div class="ribben yellow">
               <span>Scheduled</span>
            </div>
            <ul class="trip_list">
               <li><img src="images/my_trip/list1.png" alt="list1"/><span>Saudi Saudi Arabia Jeddah</span></li>
               <li><img src="images/my_trip/list2.png" alt="list2"/><span>Kingdom of Saudi Arabia, Riyadh, King Saud Street</span></li>
            </ul>
            <div class="trip_bottom">
               <p>3- 3-2023 , 6 Am</p>
               <h3>12.500 KD</h3>
            </div>
         </div>
         <div class="trip_box">
            <div class="trip_head">
               <img src="images/my_trip/car.png" alt="car"/>
               <h2>Go trip <span> (565551#)</span></h2>
            </div>
            <div class="ribben sky">
               <span>Underway</span>
            </div>
            <ul class="trip_list">
               <li><img src="images/my_trip/list1.png" alt="list1"/><span>Saudi Saudi Arabia Jeddah</span></li>
               <li><img src="images/my_trip/list2.png" alt="list2"/><span>Kingdom of Saudi Arabia, Riyadh, King Saud Street</span></li>
            </ul>
            <div class="trip_bottom">
               <p>3- 3-2023 , 6 Am</p>
               <h3>12.500 KD</h3>
            </div>
         </div>
         <div class="trip_box">
            <div class="trip_head">
               <img src="images/my_trip/car.png" alt="car"/>
               <h2>Go trip <span> (565551#)</span></h2>
            </div>
            <div class="ribben yellow">
               <span>Scheduled</span>
            </div>
            <ul class="trip_list">
               <li><img src="images/my_trip/list1.png" alt="list1"/><span>Saudi Saudi Arabia Jeddah</span></li>
               <li><img src="images/my_trip/list2.png" alt="list2"/><span>Kingdom of Saudi Arabia, Riyadh, King Saud Street</span></li>
            </ul>
            <div class="trip_bottom">
               <p>3- 3-2023 , 6 Am</p>
               <h3>12.500 KD</h3>
            </div>
         </div>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default MyTrip