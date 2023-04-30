import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CommonSection from "./shared/CommonSection";

const Contact = () => {
  const onSubmit = (data) => {
    data.preventDefault();
  };

  return (
    <CommonSection
      id="contact"
      title="Any Question? Feel Free To Contact"
      background="light"
    >
      <div className="contact-section">
        <div className="contact-left">
          <h3>Contact Me 👇</h3>
          <h4>
            I would be happy to answer any question you may have about any topic
            like freelancing, content writing etc.
          </h4>
          <div className="info">
            <FaPhoneAlt className="phone" /> <span>+911234567890</span>
          </div>
          <div className="info">
            <MdEmail className="email" /> <span>abcd@gmail.com</span>
          </div>
        </div>

        <div className="contact-right">
          <form id="contact-form" onSubmit={onSubmit}>
            <div className="inp">
              <input type="text" name="from_name" placeholder="Full Name" />
            </div>
            <div className="inp">
              <input type="email" name="reply_to" placeholder="Your Email" />
            </div>
            <div className="inp">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="inp">
              <textarea
                name="message"
                placeholder="Enter Your Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </CommonSection>
  );
};

export default Contact;
