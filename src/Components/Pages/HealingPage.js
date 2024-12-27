import React from 'react';
import CommonPage from './CommonPage';

const healingData = {
    bannerData: {
        background: "https://smita.bonwic.cloud/assets/images/healing-banner.jpg",
        title: "LEVERAGE YOUR POTENTIAL",
        subtitle: "Healing Services"
    },
    services: [
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
    
    ]
};

function HealingPage() {
    return <CommonPage bannerData={healingData.bannerData} services={healingData.services} />;
}

export default HealingPage;
