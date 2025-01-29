import React from 'react'
import backgroundImageUrl from '../../assets/images/contact-services-img.webp'; 
function ContactForm() {
    return (
        <React.Fragment>
            <section className='contact_form-area'>
                <div className='srcn_container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='contcat_img'>
                                <img src={backgroundImageUrl} alt=" contact us img" />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='login_from-conatiner_box login_from-conatiner-in'>
                                <div className='contact_detail_text contcat-form'>
                                    <h3>Send us a message</h3>
                                </div>
                                <form action="">
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6'>
                                            <div className='login_form-group'>
                                                <input type="text" class="login_form-control" placeholder=" Enter Your Name" />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6'>
                                            <div className='login_form-group'>
                                                <input type="email" class="login_form-control" placeholder="Enter Your Email" />
                                            </div>
                                        </div>
                                        <div className='col-lg-12 col-md-12'>
                                            <div className='login_form-group'>
                                                <input type="tel" class="login_form-control" placeholder="Enter Your phone Number" />
                                            </div>
                                        </div>
                                        <div className='col-lg-12 col-md-12'>
                                            <div className='login_form-group'>
                                                <textarea type="text" class="login_form-control" placeholder='message'></textarea>
                                            </div>
                                        </div>
                                        <div className='login_form-btn'>
                                            <button class="default-btn" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactForm