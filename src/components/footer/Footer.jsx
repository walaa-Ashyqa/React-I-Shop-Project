import React from 'react';
import './Footer.css';

function Footer() {
  return (
   
  <div className='footer'> 
<div className="container ">
  <footer className="py-5">
    <div className="row">
      <div className="col-4 col-md-2 mb-3">
        <h5>I-Shop</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">I-SHOP Services</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">I-SHOP Family</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Gift Cards</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">category</a></li>
        </ul>
      </div>
      <div className="col-4 col-md-2 mb-3">
        <h5>help</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">Contact Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">Help Center</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">Accessibility</a></li>
        </ul>
      </div>
      <div className="col-4 col-md-2 mb-3">
        <h5>about</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">Our Story</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">Press</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">Blog</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0  ">Careers</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5 className='newsletter-title'>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary btn-sub " type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>Â© 2023 I-Shop, All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
</div>

  )
}

export default Footer