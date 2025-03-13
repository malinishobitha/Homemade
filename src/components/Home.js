import React from "react";
import './css/Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage from './images/banner.png';
import honeyshop from './images/images (4).png';
import candleimage from './images/download.png';
import oilimage from './images/download (1).png';
import oliveoilImage from './images/download.jpeg';
import pickelimage from './images/download (1).jpeg';
import soapimage from './images/download (2).jpeg';
import shampooimage from './images/download (3).jpeg';
import candleimage1 from './images/download (4).jpeg';
import bannerImage1 from './images/banner1.png';
import homemadeOil from './images/download (5).jpeg';
import product1 from './images/download (6).jpeg';
import product2 from './images/download (7).jpeg';
import product3 from './images/download (8).jpeg';
import product4 from './images/download (9).jpeg';
import product5 from './images/download (10).jpeg';
import product6 from './images/download (11).jpeg';
import product7 from './images/download (12).jpeg';
import product8 from './images/download (13).jpeg';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
 <div>
  <div className="Container-Fluid">
    <div className="banner">
        <img src={bannerImage} alt='bannerimage'/>
    </div>
    <div className='best-seller'>
        <h1>Best Seller</h1>
    </div>
    <div className='bestseller-product'>
        <div className='product-det'>
        <div className="productimg">
     <img src ={honeyshop} alt="shopimage"/>
     </div>
     <div className="productname">
        <p>Turmeric & Honey <br/> Glow Shop</p>
        </div>
     </div>
      <div className='product-det'>
     <div className="productimg">
     <img src= {candleimage} alt='candleimage'/>
     </div>
     <div className="productname">
        <p>Lavender & Venilla <br/>Scened Candle </p>
        </div>
     </div>
      <div className='product-det'>
     <div className="productimg">
     <img src={oilimage} alt="oilimage"/>
     </div>
     <div className="productname">
        <p>Cold-Pressed<br/>Coconut Oil</p>
        </div>
        </div>
    </div>
    <div className='product'>
        <h5>Our Products are safe, Minimal and Easy On the Planet. <br></br>
        Say Goodbye to chemicals, Hello to Nature! <br/> 
        Crafted with Love, Inspired by Nature.</h5>
    </div>
    <div className='best-seller'>
        <h1>Explore Our Product</h1>
    </div>
    <div className='homemade-product'>
        <img src ={oliveoilImage} alt ='olive'/>
        <img src ={pickelimage} alt='pickelimage'/>
        <img src={soapimage} alt="soap"/>
        <img src={shampooimage} alt="shampoo"/>
        <img src={candleimage1} alt='candle'/>
        </div>
        <div className='banner'> 
            <img src={bannerImage1} alt="banner"/>
            </div>
            <div className="card mb-3" style={{width: "1200px" }}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">MADE BY HAND</h5>
            <p className="card-text">
              All products are produced in small batches to ensure quality and freshness. Handmade with ingredients you and your skin will love!
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={homemadeOil} className="img-fluid rounded-start" alt="Homemade Oil" />
        </div>
      </div>
    </div>
    <div className='best-seller'>
        <h1>Recommended Products</h1>
    </div>
    <div className="homemade-productimg">
      <Slider {...settings}>
        {[product1, product2, product3, product4, product5, product6, product7, product8].map((image, index) => (
          <div key={index}>
            <img src={image} alt={`homemadeproduct-${index}`} style={{ width: "100%", borderRadius: "10px" }} />
          </div>
        ))}
      </Slider>
    </div>
  </div>
 </div>
    );
}
export default Home
