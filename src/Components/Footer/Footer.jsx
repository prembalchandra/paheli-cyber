import React from 'react';
import './Footer.css';
import backgroundFooterImagesUrl from '../../assets/images/footer-img.png';
import logoImg from '../../assets/icon/logo-img.png';
import Newsletter from './Newsletter';

function Footer() {
    return (
        <React.Fragment>
            <Newsletter/>
            <footer className="footer_area" style={{ backgroundImage: `url(${backgroundFooterImagesUrl})` }}>
                <div className="srcn_container">
                    <div className="footer_container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer_main_content">
                                    <a href="/">
                                        <img src={logoImg} alt="Site Logo" className="logo-img" />
                                    </a>
                                    <p>
                                        Prem designs are untested designs. They are designs based on unverified assumptions.
                                        Coming up with a premature design involves three steps: predict the future.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 col-md-4 col-6">
                                        <div className="footer_listing_row">
                                            <h4>Quick Links</h4>
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/About">About Us</a></li>
                                                <li><a href="/Blog">Blog</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-md-4 col-6">
                                        <div className="footer_listing_row">
                                            <h4>Resources</h4>
                                            <ul>
                                                <li><a href="/PrivacyPolicys">Privacy Policy</a></li>
                                                <li><a href="/TermsConditions">Terms & Conditions</a></li>
                                                <li><a href="/Contact">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-md-4">
                                        <div className="footer_listing_row">
                                            <h4>Contact Us                                            </h4>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Address :</strong></span>
                                                        <span> 521684 Majadra Street Victoria Road, New York.</span>
                                                    </a>
                                                </li>
                                                <li> <a href="#">
                                                    <span><strong>Emial :</strong></span>
                                                    <span>balchandra2468@gmail.com</span>
                                                </a></li>
                                                <li><a href="#">
                                                    <span><strong>Phone :</strong></span>
                                                    <span> 8115494617</span>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='srcn_container'>
                        <div className='footer-content'>
                            <h6>2025 <a href="#">prem2desgin</a>. All rights reserved</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
