import React from 'react';
import './css/Footer.css';
function Footer(){
    return(
<div className='Container-Fluid'>
<div className="footer">
<div className="footer-links">
    
<div>
  <h3 className="footer-title">Purely Handmade</h3>
  <div className="social-icons">
    <i className="fab fa-facebook"></i>
    <i className="fab fa-instagram"></i>
    <i className="fab fa-whatsapp"></i>
    <i className="fab fa-twitter"></i>
    <i className="fab fa-linkedin"></i>
  </div>
  </div>
  <div>
      <h4>Products By Category</h4>
      <ul>
        <li>Soap</li>
        <li>Oil</li>
        <li>Shampoo</li>
        <li>Candle</li>
        <li>Pickle</li>
      </ul>
    </div>
    <div>
      <h4>Company</h4>
      <ul>
        <li>Careers</li>
        <li>About Us</li>
        <li>For Partners</li>
        <li>Terms</li>
        <li>Privacy Policy</li>
        <li>Unsubscribe</li>
      </ul>
    </div>
    <div>
      <h4>Products By Type</h4>
      <ul>
        <li>Skin Care</li>
        <li>Coconut Free</li>
        <li>Shea Butter Free</li>
        <li>Tree Nut Free</li>
        <li>Gluten Free</li>
      </ul>
    </div>
  </div>
</div>

</div>
    );

}
export default Footer