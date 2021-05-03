import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "I have too many skills that i  give to you given services.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "I am a full stack web developer.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Responsive Webdesign",
      text:
        "I can design website for All template sizing.",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Design",
      text:
        "i can design a website how you need.",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "I am also a android app developer.",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Content Writter",
      text:
        "I am a content writter and working on fiverr.",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "Search engine optimization expert.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
