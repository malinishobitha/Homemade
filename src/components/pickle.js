import React from "react";
import './css/Soap.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import pickleBanner from './images/picklebanner.jpeg';
import mangopickle from './images/mangopickle.jpeg';
import lemonpickle from './images/lemon pickle.jpeg';
import garlic from './images/garlic.jpeg';
import ginger from './images/ginger.jpeg';
import strawberrysoap from './images/straberry soap.jpeg'
import orangesoap from './images/orange soap.jpeg';
import rosesoap from './images/Rose  Soap.jpeg';
import hibisucssoap from './images/hibiscus soap.jpeg';
import jasminesoap from './images/jasmine soap.jpeg';
import lavendarsoap from './images/flower soap.jpeg';
import goatmilksoap from './images/goatmilk soap.jpeg';
import cowmilksoap from './images/cowmilk soap.jpeg';
import coconutmilksoap from './images/coconut soap.jpeg';
import badamsoap from './images/almond soap.jpeg';
import eucalyptussoap from './images/esoap.jpeg';
import peppermintsoap from './images/peppermint soap.jpeg';
import teatreesoap from './images/teatree soap.jpeg';
import rosemarysoap from './images/rosemary soap.jpeg';
function Pickle() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
    
    return (
        <div className='Container-Fluid'>
            <div className="card text-bg-dark">
                <img src={pickleBanner} className="card-img" alt="banner image" />
                <div className="card-img-overlay ">
                    <h5 className="card-title banner-content">HomeMade Goodness, Just Like Grandma's.</h5>
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
                    <img src={mangopickle} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Mango Pickle</h5>
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
                    <img src={lemonpickle} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Lemon Pickle</h5>
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
                    <img src={garlic} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Garlic Pickle</h5>
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
                    <img src={ginger} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Ginger Pickle</h5>
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
                    <img src={orangesoap} className="card-img-top" alt='soap' />
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
               <div id='flower' className="card product-card">
                    <img src={rosesoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Rose Soap</h5>
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
                    <img src={hibisucssoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Hibiscus soap</h5>
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
                    <div id='fruit' className="card product-card">
                    <img src={jasminesoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Jasmine Soap</h5>
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
                    <div id='fruit' className="card product-card">
                    <img src={lavendarsoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Lavendar Soap</h5>
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
                    <div id='milk' className="card product-card">
                    <img src={goatmilksoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">GoatMilk Soap</h5>
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
                    <div id='milk' className="card product-card">
                    <img src={cowmilksoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Cowmilk Soap</h5>
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
                    <div id='milk' className="card product-card">
                    <img src={coconutmilksoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">CoconutMilk Soap</h5>
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
                    <div id='milk' className="card product-card">
                    <img src={badamsoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">BadamMilk Soap</h5>
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
                    <img src={eucalyptussoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">eucalyptus Oil Soap</h5>
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
                    <div id='oil' className="card product-card">
                    <img src={peppermintsoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Peppermint Soap</h5>
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
                    <div id='oil' className="card product-card">
                    <img src={teatreesoap} className="card-img-top" alt='soap' />
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
                    <div id='oil' className="card product-card">
                    <img src={rosemarysoap} className="card-img-top" alt='soap' />
                    <div className="card-body text-center">
                        <h5 className="card-title">Rosemary Oil Soap</h5>
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
export default Pickle