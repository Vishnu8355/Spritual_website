import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const data = {
    Healing: [
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342699-c36d9fe5c6016818d302beb96a8a7ce5-service-06.jpg",
            title: "Sound Healing Therapy"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342642-4c0eb085abaf9f3ac2012fc441896104-service-05.jpg",
            title: "Crystal Therapy"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342605-752390b3befe1d50f74a82233f17ac18-service-04.jpg",
            title: "NLP"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342564-db6f54dfa5a728ce23e557f274bb8de0-service-03.jpg",
            title: "AKASHIK RECORDS"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342241-cf0165cc70499b013aac61b22a735c7e-service-02.jpg",
            title: "PAST LIFE REGRESSION"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734083970-53e452a21db74b8384d812e99d96a869-service-01.jpg",
            title: "IMG REIKI"
        }
    ],
    Training: [
        {
            img: "https://smita.bonwic.cloud/file_upload/treaning_workshop/1734343208-517c5cff2bc7128942cc8d7330651ef0-workshop-06.jpg",
            title: "Leadership Training"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/treaning_workshop/1734343139-39b23bd63157c9ddeb31d8f0bdf29496-workshop-05.jpg",
            title: "Mindfulness Workshop"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/treaning_workshop/1734343074-0a455fbaae35947d91edf01e50f64539-workshop-04.jpg",
            title: "Time Management Skills"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/treaning_workshop/1734343208-517c5cff2bc7128942cc8d7330651ef0-workshop-06.jpg",
            title: "Leadership Training"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/treaning_workshop/1734343139-39b23bd63157c9ddeb31d8f0bdf29496-workshop-05.jpg",
            title: "Mindfulness Workshop"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/treaning_workshop/1734343074-0a455fbaae35947d91edf01e50f64539-workshop-04.jpg",
            title: "Time Management Skills"
        }
    ],
    Products: [
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342699-c36d9fe5c6016818d302beb96a8a7ce5-service-06.jpg",
            title: "Sound Healing Therapy"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342642-4c0eb085abaf9f3ac2012fc441896104-service-05.jpg",
            title: "Crystal Therapy"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342605-752390b3befe1d50f74a82233f17ac18-service-04.jpg",
            title: "NLP"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342564-db6f54dfa5a728ce23e557f274bb8de0-service-03.jpg",
            title: "AKASHIK RECORDS"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734342241-cf0165cc70499b013aac61b22a735c7e-service-02.jpg",
            title: "PAST LIFE REGRESSION"
        },
        {
            img: "https://smita.bonwic.cloud/file_upload/healing_services/1734083970-53e452a21db74b8384d812e99d96a869-service-01.jpg",
            title: "IMG REIKI"
        }
    ],
};

const moreLinks = {
    Healing: '/healingpage',
    Training: '/tranningworkshop',
    Products: '/products',
};

function ProductCard({ img, title }) {
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

function OurService() {
    const [activeTab, setActiveTab] = useState('Healing');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="w-100 position-relative pt-5 pb-0 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <h2 className="heading-h2 text-uppercase fw-700">Our Services</h2>
                    </div>
                </div>
                <div className="row mt-5 pt-4">
                    <div className="col-xl-12">
                        <div className="nav-tabs-ui">
                            <ul
                                className="nav nav-tabs justify-content-center"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === 'Healing' ? 'active' : ''}`}
                                        onClick={() => handleTabChange('Healing')}
                                    >
                                        Healing Services
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === 'Training' ? 'active' : ''}`}
                                        onClick={() => handleTabChange('Training')}
                                    >
                                        Training Workshop
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === 'Products' ? 'active' : ''}`}
                                        onClick={() => handleTabChange('Products')}
                                    >
                                        Products
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    {data[activeTab].map((item, index) => (
                        <ProductCard key={index} img={item.img} title={item.title} />
                    ))}
                </div>
                <div className="col-xl-12 text-center mt-4">
                    <Link to={moreLinks[activeTab]} className="btn btn-theme bg-dark">
                        View More {activeTab === 'Products' ? 'Products' : activeTab}
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default OurService;
