import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

function Contactus() {
  return (
    
    <>
    <Navbar/>
  <section
    className="position-relative w-100 breadcrumbs-section"
    style={{
      backgroundImage:
        "url(https://smita.bonwic.cloud/assets/images/contact-banner.jpg)"
    }}
  >
    <div className="overlay-theme-color" />
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="breadCrumbs-navbar text-left">
            <span>Contact Us</span>
            <h1>LEVERAGE YOUR POTENTIAL</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="cleafix" />
  <section className="w-100 position-relative pt-5 pb-5 bg-white">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <div className="contact-data-bw">
            <h2>
              For Inquiries,
              <br /> Please connect with us.
            </h2>
          </div>
          <div className="filed-data-bw">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex icon-address">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                  <h4>Svastii Foundation</h4>
                </div>
                <address className="address-ui-contact">
                  Noida extention, India
                </address>
                <div className="d-flex justify-content-strat mt-2">
                  <div className="icon-mobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.082 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.521 6.795c-.008.004-1.989.978-2.11 1.033zm-1.538-13.409l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.058c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.187c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z" />
                    </svg>
                  </div>
                  <div className="mobile-num">
                    <p>+91 87007 76817</p>
                  </div>
                </div>
                <div className="d-flex mobile-card-email mt-2">
                  <figure className="icon-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                    </svg>
                  </figure>
                  <div className="email-card">
                    <a href="#"> svastiibysmita@gmail.com </a>
                  </div>
                </div>
                <div className="website-card mt-2">
                  <a href="#">
                    <i className="fa fa-globe" aria-hidden="true" />{" "}
                    svastiiwellness.com{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3501.463839594526!2d77.20052001436682!3d28.64582719023144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2E%2F6%2C%20Jhandewalan%20Extension%20New%20Delhi%20110055!5e0!3m2!1sen!2sin!4v1658921482252!5m2!1sen!2sin"
              width="100%"
              height={318}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-12">
          <div className="form-column">
            <form
              className="form-contact"
              method="post"
              action="https://smita.bonwic.cloud/contact-mail-send"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="title-input">Name</label>
                    <input
                      type="text"
                      className="form-control form-contactUs"
                      id="name"
                      name="name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="title-input">Email</label>
                    <input
                      type="email"
                      className="form-control form-contactUs"
                      id="email"
                      name="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="title-input">Phone Number</label>
                    <input
                      type="text"
                      className="form-control form-contactUs"
                      id="phone"
                      name="phone"
                      maxLength={10}
                      pattern="[6-9]{1}[0-9]{9}"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="title-input">Select your interest</label>
                    <select
                      id="code"
                      name="code"
                      className="form-control form-contactUs"
                    >
                      <option value={+91}>Select your interest</option>
                      <option value={+91}>
                        Inner child healing/ age regression
                      </option>
                      <option value={+376}>Angel Healing</option>
                      <option value={+971}>
                        Neuro Linguistic Programming{" "}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="title-input">Message</label>
                    <textarea
                      className="form-control form-message"
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <input
                    type="submit"
                    name="corpoSubmit"
                    className="submit-btn-form"
                    defaultValue="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="cleafix" />
  <Footer/>
</>

    
  )
}

export default Contactus