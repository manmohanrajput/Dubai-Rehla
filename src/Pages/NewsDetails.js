import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function NewsDetails() {
  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>News Details</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>News Details </p>
         </div>
      </div>
   </section>
   {/* <!-------------|| Footer ||---------------> */}
   {/* <!-------------|| News Sec ||---------------> */}
   <section class="news single_news ptb120">
      <div class="container">
         <div class="news_list">
            <form action="#" method="post" name="news" id="news" class="search_form">
               <div class="news_group">
                  <input type="search" placeholder="Type to search..." name="search" id="search" value=""/>
                  <button type="Submit" id="news_submit" value="">
                  <img src="images/search.png" alt="search"/>
                  </button>
               </div>
            </form>
            <div class="categories">
               <h3>Blog Categories</h3>
               <ul>
                  <li><a href="javascript:void(0);">Development <span class="count">(15)</span></a></li>
                  <li><a href="javascript:void(0);">Website Construction <span class="count">(08)</span></a></li>
                  <li><a href="javascript:void(0);">Cyber Security <span class="count">(20)</span></a></li>
                  <li><a href="javascript:void(0);">Virtual Assistant <span class="count">((07)</span></a></li>
               </ul>
            </div>
            <div class="recent">
               <h3>Recent News</h3>
               <div class="recent_news">
                  <div class="recent_img">
                     <img src="images/news/news1.jpg" alt="news"/>
                  </div>
                  <div class="recent_detail">
                     <h4>Don’t Count on Freeto Win You Customers</h4>
                     <p>July 02, 2021</p>
                  </div>
               </div>
               <div class="recent_news">
                  <div class="recent_img">
                     <img src="images/news/news2.jpg" alt="news"/>
                  </div>
                  <div class="recent_detail">
                     <h4>Is Your Organization  Building Bridges?</h4>
                     <p>June 07, 2021</p>
                  </div>
               </div>
               <div class="recent_news">
                  <div class="recent_img">
                     <img src="images/news/news3.jpg" alt="news"/>
                  </div>
                  <div class="recent_detail">
                     <h4>What Makes a Degree Review Successful?</h4>
                     <p>May 28, 2021</p>
                  </div>
               </div>
               <div class="recent_news">
                  <div class="recent_img">
                     <img src="images/news/news4.jpg" alt="news"/>
                  </div>
                  <div class="recent_detail">
                     <h4>Getting Your Team to Buy into a Big Change</h4>
                     <p>March 03, 2021</p>
                  </div>
               </div>
            </div>
            <div class="tags">
               <h3>Tags</h3>
               <ul class="tag_list">
                  <li><a href="javascript:void(0);" class="active">Cyber security</a></li>
                  <li><a href="javascript:void(0);">Hacker</a></li>
                  <li><a href="javascript:void(0);">Blockchain</a></li>
                  <li><a href="javascript:void(0);">News</a></li>
                  <li><a href="javascript:void(0);">Password</a></li>
                  <li><a href="javascript:void(0);">Security</a></li>
                  <li><a href="javascript:void(0);">SafetySupport</a></li>
                  <li><a href="javascript:void(0);">Service</a></li>
               </ul>
            </div>
         </div>
         <div class="news_details">
            <div class="list-wrapper">
               <div class="list-item">
                  <div class="news_img">
                     <img src="images/news/news-1.jpg" alt="news"/>
                  </div>
                  <ul class="autor_detail">
                     <li><img src="images/news/admin.svg" alt="admin"/>Admin</li>
                     <li><img src="images/news/date.svg" alt="date"/>17 July, 2021</li>
                     <li><img src="images/news/comment.svg" alt="Comments"/>5 Comments</li>
                  </ul>
                  <div class="recent_content">
                     <h3>Governing Cyberspace during a Crisis in Trust</h3>
                     <p>It is almost impossible to read the news without coming across a lead story
                        cataloguing the latest cyber breach or misuse of data. Intellectual property is being
                        stolen from companies at an alarming rate. Foreign actors are meddling in elections.
                        Criminals use the dark recesses of the internet to sell drugs, guns and even people.
                        The volume of these events lays bare the paradox of the digital economy and cyber
                        security. On one hand, technology has led to convenience, efficiency and wealth
                        creation. On the other hand, this great push to digitize society has meant building
                        inherent vulnerability into the core of the economic taking place atop a deeply
                        fragmented and underdeveloped system of global rules.
                     </p>
                  </div>
                  <div class="recent_content">
                     <h3>The essentials of cybersecurity solutions</h3>
                     <p>Enhancing cyber security readiness and network resilience in both government and
                        private sector systems makes it more difficult for adversaries, both foreign and
                        domestic, to exploit Canadian systems. This, in turn, enhances trust in the digital
                        ecosystem in Canada, because it makes it less likely that personal, financial or
                        corporate information will be compromised by security breaches or unscrupulous
                        data practices. By establishing greater domestic cyber security readiness and
                        resilience, it also makes it a much more credible effort for Canada to try and position
                        itself as a global leader in the field.
                     </p>
                  </div>
                  <div class="recent_content">
                     <h3>Major elements that we offer:</h3>
                     <ul>
                        <li>The need to make tough decisions as a company grows</li>
                        <li>Why people are more important than technology in any company</li>
                        <li>The importance of video calls in building team connectivity</li>
                        <li>The role of engagement in a company's culture and why it's key to success</li>
                     </ul>
                  </div>
                  <div class="recent_content">
                     <h3>Share:</h3>
                     <ul class="social">
                        <li><a href="https://www.instagram.com/rehlacar/"><img src="images/news/insta.svg" alt="insta"/></a></li>
                        <li><a href="https://www.linkedin.com/company/rehlacar/"><img src="images/news/in.svg" alt="in"/></a></li>
                        <li><a href="https://www.facebook.com/RehlaCars/?ref=bookmarks"><img src="images/news/fb.svg" alt="fb"/></a></li>
                        <li><a href="https://x.com/Rehlacar?s=08"><img src="images/news/twiter.svg" alt="twiter"/></a></li>
                     </ul>
                  </div>
               </div>
              
             
            </div>
            <div id="pagination-container" class="pagination ptb60"></div>
            <div class="client_comments">
               <h4>Comments:</h4>
               <div class="Comments_list">
                  <div class="Comments_details">
                     <img src="images/handsome-businessman.webp" alt="client_img" />
                     <div class="comment_contant">
                        <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is rewarding.</p>
                        <div class="client_name">
                           <h5>- Marvin McKinney</h5>
                           <p>May 28, 2021</p>
                        </div>
                     </div>
                  </div>
                  <hr class="comment_diveder"/>
                  <div class="Comments_details">
                     <img src="images/mand-holding.webp" alt="client_img" />
                     <div class="comment_contant">
                        <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is rewarding.</p>
                        <div class="client_name">
                           <h5>- Savan Nguyen</h5>
                           <p>May 27, 2021</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="review_box">
               <h4>Leave a comment</h4>
               <p>Your email address will not be published*</p>
               <form action="#" method="post" id="comment_form" class="comment_form">
                  <textarea placeholder="Write your comment"></textarea>
                  <button type="submit">Submit</button>
               </form>
            </div>
         </div>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default NewsDetails