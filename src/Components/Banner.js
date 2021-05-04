import React from "react";
import rafi from '../Group 33085.png';
import resume from '../Resume_3.pdf';
import {
  FaFacebookF,

  
  FaGithub,
  FaInstagram,
  
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Tanvir Rahman Rafi",
    text:
      "I am professional Full Stack web developer with long time \
    experience in this field​",
    image: {rafi},
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                      <a href="https://www.facebook.com/tanvir.rafi.3348" target="_blank" >
                    <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
                  <li>
                      <a href="https://github.com/Tanvir19026" target="_blank">
                    <FaGithub className="headerIcon" />
                    </a>
                  </li>
                  
                  <li>
                      <a href="https://www.instagram.com/tanvir.rafi.3348/" target="_blank">
                    <FaInstagram className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href={resume} className="btn btn-outline">
                    Download cv
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="banner__img">
              <img style={{width:'100%'}} src={rafi} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
