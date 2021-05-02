import React from "react";
import logo from '../logo.png';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
 
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src={logo} alt="" />
              </div>
              <p style={{textAlign: 'center'}}>
               Here You Can Connect with Me by many social networks.Stay with me.
              </p>
              <ul className="contactCircles">
                <li>
                    <a href="https://www.facebook.com/tanvir.rafi.3348">
                  <FaFacebookF className="contactIcon" />
                  </a>
                </li>
                <li>
                    <a href="https://github.com/Tanvir19026">
                  <FaGithub className="contactIcon" />
                  </a>
                </li>
               
                <li >
                    <a href="https://www.instagram.com/tanvir.rafi.3348/">
                  <FaInstagram className="contactIcon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;