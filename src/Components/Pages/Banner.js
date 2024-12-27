import React from 'react';

function Banner({ background, title, subtitle }) {
    return (
        <section
            className="position-relative w-100 breadcrumbs-section"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="overlay-theme-color" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="breadCrumbs-navbar text-left">
                            <span>{subtitle}</span>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
