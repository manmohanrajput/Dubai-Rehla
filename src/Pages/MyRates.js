import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getMyRates } from '../actions/tripAction'
import { useTranslation } from 'react-i18next';


function MyRates() {

   const { t } = useTranslation();

   // const dispatch= useDispatch()
   // const {userDetails} = useSelector((state) => state.userStore);
   // useEffect(()=>{
   //   dispatch(getMyRates({id:userDetails?.Id}))
   // },[])
  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>{t('header.myRates')}</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>{t('header.myRates')}</p>
         </div>
      </div>
   </section>
   <section class="my_rates">
      <div class="total_rates">
         <div class="star_review">
            <p class="total_star">
               <span class="star"><img src="images/star.svg" class="yello" /> </span>
               <span class="star_count">(4.5) </span> {t('dropdown.totalReview')}
            </p>
            <p class="total_review">30  {t('dropdown.Review')}</p>
         </div>
         <div class="star_grid">
            <div class="star_box">
               <p>3 reviews</p>
               <p><span><img src="images/5-star.svg" class="yello" /></span> </p>
            </div>
            <div class="star_box">
               <p>4 reviews</p>
               <p><span><img src="images/4-star.svg" class="yello" /></span> </p>
            </div>
            <div class="star_box">
               <p>50 reviews</p>
               <p><span><img src="images/3-star.svg" class="yello" /></span> </p>
            </div>
            <div class="star_box">
               <p>21 reviews</p>
               <p><span><img src="images/2-star.svg" class="yello" /></span> </p>
            </div>
            <div class="star_box">
               <p>30 reviews</p>
               <p><span><img src="images/1-star.svg" class="yello" /></span> </p>
            </div>
            <div class="star_box">
               <p>22 reviews</p>
               <p><span><img src="images/nil-star.svg" class="yello" /></span> </p>
            </div>
         </div>
      </div>
      <div class="rates_container">
         <h5>Rates:</h5>
         <div class="reviewer_comments">
            <div class="Comments_details reviewer_content">
               <img src="images/handsome-businessman.webp" alt="client_img" />
                  <div class="comment_contant">
                     <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is rewarding. 
                        <span><img src="images/4-star.svg" class="yello" /></span>
                     </p>
                     <div class="client_name">
                        <h5>- Marvin McKinney</h5>
                        <p>May 28, 2021</p>
                     </div>
                  </div>
            </div>      
         </div>
         <div class="reviewer_comments">
            <div class="Comments_details reviewer_content">
               <img src="images/mand-holding.webp" alt="client_img" />
                  <div class="comment_contant">
                     <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is rewarding. 
                        <span><img src="images/4-star.svg" class="yello" /></span>
                     </p>
                     <div class="client_name">
                        <h5>- Marvin McKinney</h5>
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

export default MyRates