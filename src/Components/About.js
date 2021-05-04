import React from "react";
import rafi from '../Group 33085.png'

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "obtain a full time job working.\
      as a full stack web developer to\
      maintain develop,design\
      website sincerely",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Tanvir Rahman Rafi" },
    { id: 2, title: "Email:", text: "tanvirrafi1999@gmail.com" },
    { id: 3, title: "Phone:", text: "+8801765341047" },
    { id: 4, title: "Linkedin", text:"https://www.linkedin.com/in/tanvir-rafi-8a6aa2202/" },
    {id:5,title:'Expertise In :Front-End', text:'Html,Css,Javascript,React JS,Meterial UI,Bootstrap etc.'},
    {id:5,title:'Expertise In :Back-End', text:'Node js,Express Js,MongoDB.'},
    {id:5,title:'Expertise In :Tools', text:'Firebase,Netlify,Chrome dev,Vs code.'},
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={rafi} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
               I am Tanvir.I studied Bsc in cse at Mawlana Bhashani Science and Technology University.
              </div>
              <div className="about__info-p2">
               I am a FullStack  web developer and web designer.i am also a WordPress developer and Working many market place like Fiverr,upwork etc.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p style={{cursor:'pointer'}}>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;