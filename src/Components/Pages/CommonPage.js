import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import ServiceCard from './ServiceCard';

function CommonPage({ bannerData, services }) {
    return (
        <>
            <Navbar />
            <Banner 
                background={bannerData.background} 
                title={bannerData.title} 
                subtitle={bannerData.subtitle} 
            />
            <div className="container py-5 bgGray-light">
                <div className="row">
                    {services.map((service, index) => (
                        <ServiceCard key={index} img={service.img} title={service.title} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CommonPage;
