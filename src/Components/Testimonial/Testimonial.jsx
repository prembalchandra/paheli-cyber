import React from 'react';
import './Testimonial.css'
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialImg1 from '../../assets/images/testimonial-1.jpg';
import TestimonialImg2 from '../../assets/images/testimonial-2.jpg';
import TestimonialImg3 from '../../assets/images/testimonial-3.jpg';

function Testimonial() {
    const testimonialSliderSettings = {
        dots: false, 
        arrows: false, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 2, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        responsive: [ 
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const testimonials = [
        {
            id: 1,
            img: TestimonialImg1,
            name: "Pamela Downs",
            position: "Developer",
            stars: 5,
            feedback:
                "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, and managing security devices and systems.",
        },
        {
            id: 2,
            img: TestimonialImg2,
            name: "Michael Stone",
            position: "Designer",
            stars: 5,
            feedback:
                "Security services are evolving with AI-driven detection mechanisms. Managed services ensure maximum safety without stressing internal resources.",
        },
        {
            id: 3,
            img: TestimonialImg3,
            name: "Anna Scott",
            position: "Project Manager",
            stars: 4,
            feedback:
                "Ensuring top-notch protection is critical in today's digital landscape. Outsourcing these capabilities can often result in more cost-effective and reliable security solutions.",
        },
    ];

    return (
        <React.Fragment>
            <section className="testimonial_area">
                <div className="srcn_container">
                    <div className='testimonial_top-bxo'>
                    <h2 className="section_title">Testimonial</h2>
                    <p>Could you provide more details about what you're looking for regarding "Our Customer"? Are you creating content, working on a design, or need help with something specific?</p>
                    </div>
                    <Slider {...testimonialSliderSettings}>
                        {testimonials.map((testimonial) => (
                          <div className='single-testimonial-card-in'>
                              <div key={testimonial.id} className="single-testimonial-card">
                                <div className="testimonial-user d-flex align-items-center justify-content-between">
                                    <div className="user d-flex align-items-center">
                                        <div className="image">
                                            <img src={testimonial.img} alt={`${testimonial.name}-testimonial`} />
                                        </div>
                                        <div className="content">
                                            <h3>{testimonial.name}</h3>
                                            <span>{testimonial.position}</span>
                                        </div>
                                    </div>
                                    <div className="star-icon">
                                        <ul className="d-flex gap-2">
                                            {Array.from({ length: testimonial.stars }, (_, index) => (
                                                <li key={index}><i class="fa fa-star" aria-hidden="true"></i></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <p>{testimonial.feedback}</p>
                            </div>
                          </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Testimonial;
