import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Crousel() {

    const sliderRef=useRef(null);
    const slides = [
        {
            id: 1,
            image: "https://smita.bonwic.cloud/assets/images/slider-01.jpg",
            heading: "Stop Looking for Light, decide to become it instead.",
            subHeading: "Smita Soni Agnihotri",
            description: "Spiritual Healer & Life Coach to promote innovative healing techniques, ancient wisdom and Spiritual healing."
        },
        {
            id: 2,
            image: "https://smita.bonwic.cloud/assets/images/slider-01.jpg",
            heading: "Discover Your True Potential and Inner Peace.",
            subHeading: "Smita Soni Agnihotri",
            description: "Helping you grow spiritually and emotionally to achieve life's balance."
        },
        {
            id: 3,
            image: "https://smita.bonwic.cloud/assets/images/slider-01.jpg",
            heading: "Explore the Path of Spiritual Growth.",
            subHeading: "Smita Soni Agnihotri",
            description: "Dedicated to promoting spiritual healing and holistic living."
        },
    ];

    const settings = {
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 5000, 
        
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0); 
        }
    }, []);

    
    

    return (
        <>
        <div className="slick-carousel-container">
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide) => (
                    <section className="position-relative video-section">
                        <div className="owl-carousel owl-theme sliderArrow">
                            <div class="item" key={slide.id}>
                                <figure class="caption-slider position-relative">
                                    <img src={slide.image} alt={slide.heading} />
                                    <figcaption>
                                        <h1>{slide.heading}</h1>
                                        <h5>{slide.subHeading} </h5>
                                        <p class="mt-3">{slide.description}</p>
                                        <div class="mt-4">
                                            <a href="#" class="btn btn-theme">Let's Connect</a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                    
                ))}
            </Slider>
        </div>
        <div className="cleafix"></div>
        </>





    );
}

export default Crousel;
