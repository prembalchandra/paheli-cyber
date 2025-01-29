import React from 'react'
import logoImg from '../../assets/icon/logo-img.png';
import './LoginForm.css'
function RegisterForm() {
    return (
        <React.Fragment>
            <section className='login_from-area'>
                <div className='srcn_container'>
                    <div className='login_from-conatiner'>
                        <div className='login_from-conatiner_box'>
                            <div className='navber_logo'>
                                <a href="/">
                                    <img src={logoImg} alt="Site Logo" className="logo-img" />
                                </a>
                            </div>
                            <div className='login_from'>
                                <form action="">
                                    <div className='login_form-row'>
                                        <div className='login_form-group'>
                                            <input type="text" class="login_form-control" placeholder="FastName" />
                                        </div>
                                        <div className='login_form-group'>
                                            <input type="text" class="login_form-control" placeholder="LastName" />
                                        </div>
                                    </div>
                                    <div className='login_form-row'>
                                        <div className='login_form-group'>
                                            <input type="Email" class="login_form-control" placeholder="Your email" />
                                        </div>
                                        <div className='login_form-group'>
                                            <input type="tel" class="login_form-control" placeholder="Your Number" />
                                        </div>
                                    </div>
                                    <div className='login_form-row'>
                                        <div className='login_form-group'>
                                            <input type="password" class="login_form-control" placeholder="Your password" />
                                        </div>
                                        <div className='login_form-group'>
                                            <input type="password" class="login_form-control" placeholder="Your confirm password" />
                                        </div>
                                    </div>
                                    <div class="login_form-group">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        <label class="form-check-label" for="">Remember me</label>
                                    </div>
                                    <div className='login_form-btn'>
                                        <button class="default-btn" type="submit">Login</button>
                                    </div>
                                    <p>Already have an account? Please  <a class="text-decoration-none" href="/Register">Login </a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default RegisterForm