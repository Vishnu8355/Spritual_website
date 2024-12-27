import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

            <footer className="w-100 position-relative pt-5 pb-4 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                            <div className="position-relative">
                                <a className="navbar-brand" href="#">
                                    <img data-src="https://smita.bonwic.cloud/assets/images/logoSvasti.png" className="lazyload img-fluid" alt="logo" width="150" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-links">
                                <h4>Useful Links</h4>
                                <div className="col-ul">
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><a href="#">Healing Services</a></li>
                                        <li><a href="#">Training Workshop</a></li>
                                        <li><a href="#">Products</a></li>
                                    </ul>
                                    <ul>

                                        <li><a href="#">E-Shop</a></li>
                                        <li><a href="#">Podcast</a></li>
                                        <li><a href="#">Blogs</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="footer-address">
                                <h4>Svastii Foundation </h4>
                                <address>
                                    Noida extention, India
                                </address>
                                <div className="phone-card">
                                    <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i> svastiibysmita@gmail.com</a>
                                </div>
                                <div className="phone-card mt-2">
                                    <a href="#"><i className="fa fa-phone" aria-hidden="true"></i> +91 87007 76817</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 text-left">
                            <div className="position-relative d-flex flex-column">
                                <Link to="/contactus"  className="btn btn-green mb-3">Contact Us <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                            <div className="copyright-card">
                                <p>© Svastii Foundation 2022 | All Rights Reserved </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 text-right">
                            <div className="social-icons">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer