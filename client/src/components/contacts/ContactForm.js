import React from 'react';
import ContactAddress from './ContactAddress'

function ContactForm() {
  return (

	  <section className="contact-area pt-110 pb-110">
        <div className="container">
          <div className="container-inner-wrap">
            <div className="row justify-content-center justify-content-lg-between">
              <div className="col-lg-6 col-md-8 order-2 order-lg-0">
                <div className="contact-title mb-20">
                  <h5 className="sub-title">Contact Us</h5>
                </div>
                <div className="contact-wrap-content">
                  <p>Thank you for considering adoption from our dog shelter! We are always excited to help match our furry friends with loving forever homes.We want to make sure that every adoption is a great match for both the dog and the adopter, so please feel free to ask any questions you may have about the adoption process or about our available dogs. Our staff and volunteers are happy to provide information and guidance to help make your adoption experience a positive one.

Thank you again for considering adoption from our shelter. We look forward to hearing from you soon!</p>
                  <form className="contact-form">
                    <div className="form-grp">
                      <label htmlFor="name">Your Name <span>*</span></label>
                      <input type="text" id="name" placeholder="Jon Deo..." />
                    </div>
                    <div className="form-grp">
                      <label htmlFor="email">Your Email <span>*</span></label>
                      <input type="text" id="email" placeholder="info.example@.com" />
                    </div>
                    <div className="form-grp">
                      <label htmlFor="message">Your Message <span>*</span></label>
                      <textarea name="message" id="message" placeholder="Opinion..." defaultValue={""} />
                    </div>
                    <div className="form-grp checkbox-grp">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Don’t show your email address</label>
                    </div>
                    <button type="button" className="btn rounded-btn">Send Now</button>
                  </form>
                </div>
              </div>

              <ContactAddress/>

            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactForm;
