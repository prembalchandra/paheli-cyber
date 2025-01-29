import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImg from '../../assets/icon/logo-img.png';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((prevState) => !prevState); 
    };

    return (
        <React.Fragment>
            <header className='header-area'>
                <div className='topbar_header-area'>
                    <div className='srcn_container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <div className='topbar_header-row topbar_header-lift'>
                                    <div className='topbar_header_phone'>
                                        <div className='topber_header-content'>
                                            <a href="#">
                                                <span className="fa fa-volume-control-phone" aria-hidden="true"></span>
                                                <span>8115494617</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='topber_header_email'>
                                        <div className='topber_header-content'>
                                            <a href="#">
                                                <span className="fa fa-envelope" aria-hidden="true"></span>
                                                <span>balchandra2468@gmail.com</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <div className='topbar_header-right'>
                                    <div className='topber_header-contact-social'>
                                        <div className='social-contact-row'>
                                            <a href="https://www.instagram.com/"><span className="fa fa-instagram" aria-hidden="true"></span></a>
                                            <a href="#"> <span className="fa fa-whatsapp" aria-hidden="true"></span></a>
                                            <a href="https://www.linkedin.com/feed/" > <span className="fa fa-linkedin-square" aria-hidden="true"></span></a>
                                            <a href="#"><span className="fa fa-telegram" aria-hidden="true"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`navber-area ${sticky ? 'sticky' : ''}`}>
                    <div className='srcn_container'>
                        <div className='navber_row'>
                            <div className='navber_logo'>
                                <a href="/">
                                    <img src={logoImg} alt="Site Logo" className="logo-img" />
                                </a>
                            </div>
                            <div className={`navber_listing ${menuOpen ? 'show' : ''}`}>
                                <nav className='navbar-box'>
                                    <ul className='navber_box_listing'>
                                        <li className='navber_item'><a href="/" className='navber_link'>Home</a></li>
                                        <li className='navber_item'><a href="/About" className='navber_link'>About Us</a></li>
                                        <li className='navber_item'><a  className='navber_link'>Blog</a>
                                            <div className='sub_menu'>
                                                <ul>
                                                    <li> <a href="/Blog">Blog</a></li>
                                                    <li> <a href="/BlogDetails">Blog Details </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='navber_item'><a href="/Contact" className='navber_link'>Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='navber_login_area'>
                                <div className=''>
                                    <div className='navber_login-row'>
                                        <ul>
                                            <li>
                                                <div class="btns m-0">
                                                <a className="btn_wrapper" href="/login"><span>Login</span></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='navber_phone_area'>
                                        <div className="dot-menu">
                                            <div
                                                className={`inner ${isActive ? "active" : ""}`}
                                                onClick={handleClick}
                                            >
                                                <div className="circle circle-one"></div>
                                                <div className="circle circle-two"></div>
                                                <div className="circle circle-three"></div>
                                            </div>
                                            <div className={`header_box-icon ${isActive ? "active" : ""}`}>
                                                <div className="option-inner">
                                                
                                                    <a href="/Login"><span class="fa fa-sign-in" aria-hidden="true"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='burger_area'>
                                            <button
                                                type="button"
                                                className={`burger ${menuOpen ? 'active' : ''}`}
                                                id="burger"
                                                onClick={toggleMenu}
                                            >
                                                <span className="burger_line"></span>
                                                <span className="burger_line"></span>
                                                <span className="burger_line"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;
