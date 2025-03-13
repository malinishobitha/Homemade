import React from "react";
import './css/Soap.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import soapBanner from './images/y2jfg_512.jpg';
import neemsoap from './images/neem soap.jpeg';
import tulasisoap from './images/tulasi soap.jpeg';
import aloverasoap from './images/alovera soap.jpeg';
import turmericsoap from './images/turmeric soap.jpeg';
import strawberrysoap from './images/straberry soap.jpeg';
import orangesoap from './images/orange soap.jpeg';
function Soap() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
    
    return (
        <div className='Container-Fluid'>
            <div className="card text-bg-dark">
                <img src={soapBanner} className="card-img" alt="banner image" />
                <div className="card-img-overlay ">
                    <h5 className="card-title banner-content">Pure Skincare, Handmade with Love</h5>
                </div>
            </div>
            <div className='container-Fluid'>
                <div className='soap-det'>
                <div className='soap-types'>
                <p onClick={() => scrollToSection("herbal")}>HERBAL Soaps</p>
                <p onClick={() => scrollToSection("fruit")}>FRUIT Soaps</p>
                <p onClick={() => scrollToSection("flower")}>FLOWER Soaps</p>
                <p onClick={() => scrollToSection("milk")}>MILK Soaps</p>
                 <p onClick={() => scrollToSection("oil")}>OIL Soaps</p>
                </div>
                <div id = 'herbal' className='productcards'>
                <div className="card product-card">
                    <img src={neemsoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Neem Soap - Antibacterial</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 120</h5>
                        <div className="rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStarHalfAlt className="star" /><br></br>
                            <span className="review-text"> 994 reviews</span>
                        </div>
                       
                        </div>
                        <button className="btn btn-outline-primary w-100">ADD TO BAG</button>
                    </div>
                </div>
                <div className="card product-card">
                    <img src={tulasisoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Tulasi Soap</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 200</h5>
                        <div className="rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStarHalfAlt className="star" /><br/>
                            <span className="review-text"> 994 reviews</span>
                        </div>
                       
                        </div>
                        <button className="btn btn-outline-primary w-100">ADD TO BAG</button>
                    </div>
                </div>
                
                <div className="card product-card">
                    <img src={aloverasoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Alovera Soap</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 120</h5>
                        <div className="rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStarHalfAlt className="star" /><br/>
                            <span className="review-text"> 994 reviews</span>
                        </div>
                       </div>
                        <button className="btn btn-outline-primary w-100">ADD TO BAG</button>
                    </div>
                    </div>
                <div className="card product-card">
                    <img src={turmericsoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Turmeric Soap</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 120</h5>
                        <div className="rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStarHalfAlt className="star" /><br/>
                            <span className="review-text"> 994 reviews</span>
                        </div>
                        </div>
                       
                        <button className="btn btn-outline-primary w-100">ADD TO BAG</button>
                    </div>
                </div>
                <div id='fruit' className="card product-card">
                    <img src={strawberrysoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Turmeric Soap</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 120</h5>
                        <div className="rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStarHalfAlt className="star" /><br/>
                            <span className="review-text"> 994 reviews</span>
                        </div>
                        </div>
                       
                        <button className="btn btn-outline-primary w-100">ADD TO BAG</button>
                    </div>
                </div>
                <div className="card product-card">
                    <img src={turmericsoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Orange Soap</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 80</h5>
                        <div className="rating">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStarHalfAlt className="star" /><br/>
                            <span className="review-text"> 994 reviews</span>
                        </div>
                        </div>
                       
                        <button className="btn btn-outline-primary w-100">ADD TO BAG</button>
                    </div>
                </div>
</div>

            </div>
        </div>

      </div>
      
    );
}
export default Soap