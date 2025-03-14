import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import oilbanner from './images/oilbanner.jpeg';
import coconutoil from './images/coconut oil.jpeg';
import amalaoil from './images/amla oil.jpeg';
import curryoil from './images/curry oil.jpeg';
import bhringrajoil from './images/bhringraj oil.jpeg';
import aloeveraoil from './images/aloevera oil.jpeg';
import almondoil from './images/almond oil.jpeg';
import rosehipoil from './images/rosehip oil.jpeg';
import saffronoil from './images/saffron oil.jpeg';
import coconutcooking from './images/coconut cooking oil.jpeg';
import mustardoil from './images/mustrate oil.jpeg';
import sesameoil from './images/sesame oil.jpeg';
import groundnutoil from './images/oil.jpeg';
import Lavendaroil from './images/essential.jpeg';
import teatreeoil from './images/teatree oil.jpeg';
import peppermintoil from './images/peppermin oil.jpeg';
import eucalyptusoil from './images/eucalyptus oil.jpeg';
import bhringarajoil from './images/bhringraj oil.jpeg';
import kumkumadioil from './images/kumkumadi oil.jpeg';
import dashmooloil from './images/dashmool oil.jpeg';
import mahanarayanoil from './images/maharayan oil.jpeg';
import './css/Soap.css';
function Oil(){
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
    return(
      <div className='Container-Fluid'>
           <div className="card text-bg-dark">
                <img src={oilbanner} className="card-img" alt="banner image" />
                <div className="card-img-overlay ">
                    <h5 className="card-title banner-content">Where Tradion Meets Purity</h5>
                </div>
            </div>
            <div className='container-Fluid'>
                <div className='soap-det'>
                <div className='soap-types'>
                <p onClick={() => scrollToSection("hair")}>HAIRCARE Oils</p>
                <p onClick={() => scrollToSection("skin")}>SKINCARE Oils</p>
                <p onClick={() => scrollToSection("cooking")}>COOKING Oils</p>
                <p onClick={() => scrollToSection("essential")}>ESSENTIAL Oils</p>
                 <p onClick={() => scrollToSection("ayurvedic")}>AYURVEDIC Oils</p>
                </div>
                <div id = 'hair' className='productcards'>
                <div className="card product-card">
                    <img src={coconutoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Cold-Pressed Coconut Oil</h5>
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
                    <img src={amalaoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Amla Hair Oil</h5>
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
                    <img src={curryoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Curry Leaves Hair Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 180</h5>
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
                    <img src={bhringrajoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Bhringraj Herbal Hair Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 90</h5>
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
                <div id='skin' className="card product-card">
                    <img src={aloeveraoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Aloe Vera Infused Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 180</h5>
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
                <div id='skin' className="card product-card">
                    <img src={rosehipoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Rosehip Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 100</h5>
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
               <div id='skin' className="card product-card">
                    <img src={almondoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Almond Oil</h5>
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
                 <div id='skin' className="card product-card">
                    <img src={saffronoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Saffron Oil</h5>
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
                    <div id='cooking' className="card product-card">
                    <img src={coconutcooking} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Cold - Pressed Coconut Oil</h5>
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
                    <div id='cooking' className="card product-card">
                    <img src={mustardoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Cold - Pressed Mustard Oil</h5>
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
                    <div id='cooking' className="card product-card">
                    <img src={sesameoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Sesame Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 180</h5>
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
                    <div id='cooking' className="card product-card">
                    <img src={groundnutoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Groundnut Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 90</h5>
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
                    <div id='essential' className="card product-card">
                    <img src={Lavendaroil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Lavendar Essential Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 180</h5>
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
                    <div id='essential' className="card product-card">
                    <img src={peppermintoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Peppermint Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 330</h5>
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
                    <div id='oil' className="card product-card">
                    <img src={eucalyptusoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Eucalyptus Oil </h5>
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
                    <div id='oil' className="card product-card">
                    <img src={bhringarajoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Bhringraj Oil</h5>
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
                    <div id='essential' className="card product-card">
                    <img src={teatreeoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Teatree Oil Soap</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 180</h5>
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
                    <div id='essential' className="card product-card">
                    <img src={kumkumadioil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Kumkumadi Oil</h5>
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
                <div id='ayurvedi' className="card product-card">
                    <img src={dashmooloil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Dashmool Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 180</h5>
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
                <div id='essential' className="card product-card">
                    <img src={mahanarayanoil} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Mahanarayan Oil</h5>
                        <div className="product-price">
                        <h5 className="price">₹ 90</h5>
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
export default Oil