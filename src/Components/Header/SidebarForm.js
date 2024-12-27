import React, { useState } from 'react';



const SidebarForm = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      
      <div className="enquiryButton">
        <button
          id="toggleButton"
          type="button"
          className="btn btn-enquryUi"
          onClick={toggleSidebar}
        >
          Consult Now
        </button>
      </div>

    
      <div
        id="sidebar"
        className={`sidebar-menu-flex ${isSidebarOpen ? 'open' : 'closed'}`}
      >
        
        <div className="menu-inner-item">
          <div id="closeSidebar" className="closetn" onClick={toggleSidebar}>
            <img
              src="https://www.bonwic.com/images/close.png"
              alt="icons"
              width="16"
            />
          </div>

          
          <div className="form-details">
            <h4>Book Your Consultation Now!</h4>
            <p>We will be delighted to answer all your queries</p>
            <form
              className="form-contact"
              method="post"
              action="thankyou.php"
              name="enquery"
              encType="multipart/form-data"
              validate="validate"
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="title-input">Message</label>
                    <textarea
                      className="form-control form-message"
                      name="message"
                      id="message"
                      rows="2"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    type="submit"
                    name="getintouch"
                    className="submit-btn-form"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarForm;
