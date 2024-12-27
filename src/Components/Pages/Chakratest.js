import React from 'react'
import Navbar from '../Header/Navbar'

function Chakratest() {
  return (
    <>
      <Navbar />
    
      <div className="clearfix" />
      <section
        className="position-relative w-100 breadcrumbs-section"
        style={{
          backgroundImage:
            "url(https://smita.bonwic.cloud/assets/images/services/chakra-bg.jpg)"
        }}
      >
        <div className="overlay-theme-color" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="breadCrumbs-navbar text-left">
                {/*<span>Chakra Test</span>*/}
                {/*<h1>Chakra Test</h1>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cleafix" />
      <section className="main-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header">
                <h1>Which of your Chakras needs balancing?</h1>
                <p>Discover your energy centers in just a few minutes!</p>
              </div>
              <div className="section">
                <h2 className="section-title">Quiz Instructions</h2>
                <p>
                  <strong>Time Required:</strong> This quiz will take approximately
                  10 minutes.
                </p>
                <p>
                  <strong>Instructions:</strong> Please answer each question
                  honestly.
                </p>
              </div>
              <div className="section">
                <h2 className="section-title">Confidentiality Notice</h2>
                <div className="notice">
                  <p>
                    This is an anonymous survey. Responses to this survey are
                    considered confidential and therefore individual responses will
                    not be released, shared, or published.
                  </p>
                  <p>
                    The survey results will only be used by Irene if you elect to
                    follow up for a FREE 30-minute consultation or if you seek
                    services.
                  </p>
                  <p>
                    <strong>
                      At the end of the survey we will provide you with a score for
                      each chakra and the option to have a copy emailed to you.
                    </strong>
                  </p>
                </div>
              </div>
              <div className="button-container">
                <a href="/chakra-test-result" className="button">
                  Start Chakra Test
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Chakratest