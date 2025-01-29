import React from 'react'
import './Choose.css'
import HomeBottomImg from '../../assets/images/bottom-img-desgin.png';
import HomeTopImg from '../../assets/images/top-img-desgin.png';
import ChooseImg from '../../assets/images/choose-1.png'
import ChooseImg2 from '../../assets/images/choose-2.png'
function Choose() {
    return (
        <React.Fragment>
            <section className='choose_arae'>
                <div className="srcn_container">
                    <div className='row'>
                        <div className='col-md-6 col-lg-6'>
                            <div className='choose_img'>
                                <img src={ChooseImg} alt=" choose img" />
                                <div className='choose-img2'>
                                    <img src={ChooseImg2} alt=" choose img" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <div className='choose_content icon-box-wrapper'>
                                <span>Why Choose Us?</span>
                                <h2>Digital Vigilance: Strengthening Cyber Defenses in the Modern.</h2>
                                <div className='choose_row'>
                                    <div class="choose-value"><span class="fa fa-check" aria-hidden="true"></span><span className='chooes-text'  >Vulnerability Assessment and Penetration Testing</span></div>
                                    <div class="choose-value"><span class="fa fa-check" aria-hidden="true"></span><span className='chooes-text'>Identity and Access Management (IAM)</span></div>
                                    <div class="choose-value"><span class="fa fa-check" aria-hidden="true"></span><span className='chooes-text'>Security Information and Event Management</span></div>
                                    <div class="choose-value"><span class="fa fa-check" aria-hidden="true"></span><span className='chooes-text'>Security Auditing and Compliance</span></div>
                                    <div class="choose-value"><span class="fa fa-check" aria-hidden="true"></span><span className='chooes-text'>This service involves responding to security                                </span></div>
                                </div>
                                <div className='btns'>
                                    <a href="/About">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='choose_top-img'>
                    <img src={HomeTopImg} alt=" Top images design" />
                </div>
                <div class="banner-wrapper-shape">
                    <img src={HomeBottomImg} />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Choose