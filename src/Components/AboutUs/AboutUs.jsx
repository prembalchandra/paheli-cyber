import React from 'react'
import './About.css'
import AboutImg from '../../assets/images/about-iamges.png'
function About() {
    return (
        <React.Fragment>
            <section className='about_section-area'>
                <div className="srcn_container">
                    <div className='row'>
                        <div className='col-md-6 col-lg-6'>
                            <div className='about_img'>
                                <img src={AboutImg} alt="about us images" />
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <div className='about_content'>
                                <span>About Us</span>
                                <h2>The Virtual Realm: A Expansive Guide to Cybersecurity.
                                </h2>
                                <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes. The implementation of effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming increasingly innovative
                                </p>
                            </div>
                            <div className='about-item_boxinner'>
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="about-item">
                                            <div class="point">4.7+</div>
                                            <h3>Review Customer</h3>
                                            <p>I noticed the phrase "Review Customer" lacks context. You might want to clarify its meaning or remove it if it's unnecessary. Let me know if you need further adjustments!</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="about-item">
                                            <div class="point">4K+</div>
                                            <h3>Project Completed</h3>
                                            <p>The document has been finalized and the unnecessary text has been removed. Let me know if there's anything else you'd like to adjust!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btns">
                                <a href="#">Know More About</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About
