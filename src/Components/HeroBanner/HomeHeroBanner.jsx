import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeRightImg from '../../assets/images/banner-wrapper.png';
import HomeBottomImg from '../../assets/images/bottom-img-desgin.png';


function HomeHeroBanner() {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slideContent = [
        {
            id: 1,
            title: "Cybersecurity Unleashed:",
            heading: "Securing the Digital Frontier with Vigilance and Innovation.",
            description: "In today's increasingly digital world, cybersecurity has become paramount. With the rapid expansion of online activities, the threat landscape...",
        },
        {
            id: 2,
            title: "Cybersecurity Unleashed:",
            heading: "Enhancing Resilience Against Evolving Cyber Threats.",
            description: "Secure your organization with cutting-edge solutions and proactive measures to counteract today's cyber challenges...",
        },
    ];

    return (
        <React.Fragment>
            <section className="Home_hero-banner_area">
                <div className="srcn_container">
                    <div className="home_hero_conatoner">
                        <Slider {...sliderSettings}>
                            {slideContent.map((content) => (
                                <div key={content.id} className="home_content-box">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6">
                                            <div className="home_banner-content">
                                                <span>{content.title}</span>
                                                <h1>{content.heading}</h1>
                                                <p>{content.description}</p>
                                                <div class="btns">
                                                    <a href="#">Login</a>
                                                    <a href="#">Contact Us</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="home_right_img">
                                                <img src={HomeRightImg} alt="Cybersecurity" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div class="banner-wrapper-shape">
                    <img src={HomeBottomImg} />
                </div>
            </section>
        </React.Fragment>
    );
}

export default HomeHeroBanner;
