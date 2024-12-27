import React from 'react';

function ServiceCard({ img, title }) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 pl-2 pr-2">
            <div className="category-column">
                <a href="javascript:void(0)" className="zoom-images">
                    <figure className="picture-frames">
                        <img
                            src={img}
                            className="img-fluid"
                            alt={title}
                        />
                    </figure>
                    <div className="service-title">
                        <h3>{title}</h3>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ServiceCard;
