import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Smita Soni Agnihotri",
      title: "Spiritual Healer & Life Coach",
      image: "https://smita.bonwic.cloud/assets/images/testimonial-01.jpg",
      description:
        "Our Journey begun in 2017 with a purpose to help every being healing from within by using the hidden healing powers. We strongly believe that every soul is born with the purpose of blossoming by expanding their consciousness, and well-being is a birthright of every being. Still, we live in scarcity in one or the other aspects of life by accepting it to be God’s wish.",
    },
    {
      id: 2,
      name: "Ms. Shubhi Sharma",
      title: "AVP, Accenture",
      image: "https://smita.bonwic.cloud/assets/images/testimonial-02.jpg",
      description:
        "Our Journey begun in 2017 with a purpose to help every being healing from within by using the hidden healing powers. We strongly believe that every soul is born with the purpose of blossoming by expanding their consciousness, and well-being is a birthright of every being. Still, we live in scarcity in one or the other aspects of life by accepting it to be God’s wish.",
    },
    {
      id: 3,
      name: "Manisha Dutta",
      title: "Chief Manager Legal, SRF",
      image: "https://smita.bonwic.cloud/assets/images/testimonial-03.jpg",
      description:
        "Our Journey begun in 2017 with a purpose to help every being healing from within by using the hidden healing powers. We strongly believe that every soul is born with the purpose of blossoming by expanding their consciousness, and well-being is a birthright of every being. Still, we live in scarcity in one or the other aspects of life by accepting it to be God’s wish.",
    },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoSlide); // Cleanup
  }, [currentIndex]);

  return (
    <>
      <style>{`
        .dots-navigation {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ccc;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .dot.active {
          background-color: #007bff;
        }

        .testimonials-section {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      <section className="w-100 position-relative bg-line-moving testimonials-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <h5 className="heading-h5 text-uppercase">Clients Messages</h5>
              <h2 className="heading-h2 text-uppercase fw-700">Testimonials</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
              <div className="left-quote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="testimonials-content">
                <div className="testimonials-card">
                  <figure>
                    <img
                      src={testimonials[currentIndex].image}
                      className="img-fluid"
                      alt={`${testimonials[currentIndex].name} image`}
                    />
                  </figure>
                  <div className="testimonials-info">
                    <h4>{testimonials[currentIndex].name}</h4>
                    <h6>{testimonials[currentIndex].title}</h6>
                    <p>{testimonials[currentIndex].description}</p>
                  </div>
                </div>
              </div>
              <div className="dots-navigation text-center mt-4">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
              <div className="right-quote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
