import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function ServiceHeroSection() {
  return (
    <>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}} id="services">
		<div class="container">
			<div class="banner_head">
				<h1>Services</h1>
				<p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
			</div>
			<div class="bredcrub">
				<a href="index.html" target="_self"> Home </a><span> ></span> <p>Services </p>
			</div>
		</div>
	</section>
    </>
  )
}

export default ServiceHeroSection