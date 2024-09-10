import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import '../css/style.css';
import '../css/reset.css';
import '../css/responsive.css';
import '../css/glightbox.css';
import { GetAllAdvertisments } from '../services/tripService';
import moment from 'moment';
const itemsPerPage = 6;

const listItems = [
  // Add your list items here. Ensure you have more than 6 items to see the pagination in action.
  // For brevity, only a few items are shown here; you need to add the rest of your items.
  {
    imgSrc: "images/news/news-1.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-2.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-3.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-4.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-5.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-6.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-1.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-2.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-3.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-4.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-5.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-6.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-1.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  {
    imgSrc: "images/news/news-2.jpg",
    admin: "Admin",
    date: "17 July, 2021",
    title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
    description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    link: "#/news-details"
  },
  // Add all other items similarly
];

function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllAdvertisments();
  }, [])
  const getAllAdvertisments = async () => {
    let { data } = await GetAllAdvertisments();
    console.log({ data });
    setList(data?.model)
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Description: "استمتع بخصومات تصل الي 30 % من رحلة طوال الشهر"
  //   ExpirationDate: "2022-05-01T00:00:00" 
  //    Id: 9 
  //     Image: "18abbf0ec1e542649e0984dbf841f4b3.jpg" 
  //      IsActive: true 
  //       Title: "خصومات 30 %"  
  //       URL: null
  const renderListItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = list.slice(startIndex, startIndex + itemsPerPage);
    // const selectedItems = listItems.slice(startIndex, startIndex + itemsPerPage);

    return selectedItems.map((item, index) => (
      <div className="list-item" key={index}>
        {/* <a href={item.link}> */}
        <a href={'#/news-details'}>
          <div className="news_img">
            <img src={item.Image} alt="news" />
          </div>
          <ul className="autor_detail">
            <li><img src="images/news/admin.svg" alt="admin" />{item.admin || 'Admin'}</li>
            <li><img src="images/news/date.svg" alt="date" />{moment(item.ExpirationDate).format('DD MMM YYYY')}</li>
          </ul>
          <div className="recent_content">
            <h3>{item.Title}</h3>
            <p>{item.Description}</p>
            <span>Read More</span>
          </div>
        </a>
      </div>
    ));
  };

  const renderPagination = () => {
    // const totalPages = Math.ceil(listItems.length / itemsPerPage);
    const totalPages = Math.ceil(list.length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <>
      <Header />
      <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }} id='news'>
        <div className="container">
          <div className="banner_head">
            <h1>News</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
          </div>
          <div className="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow" /></span>
            <p>News </p>
          </div>
        </div>
      </section>
      <section className="news ptb120">
        <div className="container">
          <div className="news_list">
            <form action="#" method="post" name="news" id="news" className="search_form">
              <div className="news_group">
                <input type="search" placeholder="Type to search..." name="search" id="search" />
                <button type="Submit" id="news_submit" value="">
                  <img src="images/search.png" alt="search" />
                </button>
              </div>
            </form>
            <div className="categories">
              <h3>Blog Categories</h3>
              <ul>
                <li><a href="javascript:void(0);">Development <span className="count">(15)</span></a></li>
                <li><a href="javascript:void(0);">Website Construction <span className="count">(08)</span></a></li>
                <li><a href="javascript:void(0);">Cyber Security <span className="count">(20)</span></a></li>
                <li><a href="javascript:void(0);">Virtual Assistant <span className="count">((07)</span></a></li>
              </ul>
            </div>
            <div className="recent">
              <h3>Recent News</h3>
              <div className="recent_news">
                <div className="recent_img">
                  <img src="images/news/news1.jpg" alt="news" />
                </div>
                <div className="recent_detail">
                  <h4>Don’t Count on Free to Win You Customers</h4>
                  <p>July 02, 2021</p>
                </div>
              </div>
              <div className="recent_news">
                <div className="recent_img">
                  <img src="images/news/news2.jpg" alt="news" />
                </div>
                <div className="recent_detail">
                  <h4>Is Your Organization Building Bridges?</h4>
                  <p>June 07, 2021</p>
                </div>
              </div>
              <div className="recent_news">
                <div className="recent_img">
                  <img src="images/news/news3.jpg" alt="news" />
                </div>
                <div className="recent_detail">
                  <h4>What Makes a Degree Review Successful?</h4>
                  <p>May 28, 2021</p>
                </div>
              </div>
              <div className="recent_news">
                <div className="recent_img">
                  <img src="images/news/news4.jpg" alt="news" />
                </div>
                <div className="recent_detail">
                  <h4>Getting Your Team to Buy into a Big Change</h4>
                  <p>March 03, 2021</p>
                </div>
              </div>
            </div>
            <div className="tags">
              <h3>Tags</h3>
              <ul className="tag_list">
                <li><a href="javascript:void(0);" className="active">Cyber security</a></li>
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
          <div className="news_details">
            <div className="list-wrapper">
              {renderListItems()}
            </div>
            <div id="pagination-container" className="pagination pt60">
              {renderPagination()}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default News;
