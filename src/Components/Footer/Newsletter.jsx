import React from 'react'

function Newsletter() {
    return (
        <React.Fragment>
            <section>
                <div className='srcn_container'>
                    <div className='newsletter-box'>

                        <div className='row'>
                            <div className='col-md-6 col-lg 6'>
                                <div className='newsletter_conent'>
                                    <span>SUBSCRIBE NEWSLETTER </span>
                                    <h4>Don't Miss Our Future Updates! Get Subscribed Today!                                    </h4>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6'>
                                <div className='news_letters_form'>
                                    <form action="">
                                        <div class="form-new-ltter">
                                            <input placeholder="Email" type="Email"  className='login_form-control' required/>
                                         <div className='login_form-btn'>
                                          <button class="default-btn">Subscribe</button>
                                         </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Newsletter