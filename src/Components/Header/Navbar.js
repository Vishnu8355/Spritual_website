import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header className="ui-header fixed-top stickyHeader">
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="container container-header">
                        <div className="brand-ui">
                            <a className="navbar-brand" href="https://smita.bonwic.cloud/">
                                <img data-src="https://smita.bonwic.cloud/assets/images/logoSvasti.png" className="lazyload" alt="logo" width="120" />
                            </a>
                        </div>
                        <button className="navbar-toggler  nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="bar-top"></span>
                            <span className="bar-mid"></span>
                            <span className="bar-bot"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-lg-column justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav-custom ml-auto">
                                <li>
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto nav-top-position">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" >About Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                        <i className="fa fa-chevron-down"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/healingpage" className="dropdown-item" >Healing Services</Link>
                                        <Link to="/tranningworkshop" className="dropdown-item" href="https://smita.bonwic.cloud/training-workshop">Training Workshop</Link>
                                        <Link to="/products" className="dropdown-item" href="https://smita.bonwic.cloud/products">Products</Link>

                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/chakratest" className="nav-link">Chakra Test</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Podcast</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactus" className="nav-link" >Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header><div className="clearfix"></div>
        </>
    )
}

export default Navbar