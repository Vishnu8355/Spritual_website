import React from 'react';
import CommonPage from './CommonPage';

const trainingData = {
    bannerData: {
        background: "https://smita.bonwic.cloud/assets/images/contact-banner.jpg",
        title: "ENHANCE YOUR SKILLS",
        subtitle: "Training & Workshops"
    },
    services: [
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
        
    ]
};

function Tranningworkshop() {
    return <CommonPage bannerData={trainingData.bannerData} services={trainingData.services} />;
}

export default Tranningworkshop;