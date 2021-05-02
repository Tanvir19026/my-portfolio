import React from 'react';

  import fitnessClub from '../images/Screenshot (17).png';
  import BigBazar from '../images/Screenshot (15).png';
  import rideshare from '../images/Screenshot (16).png';
  import epl from '../images/Screenshot (21).png';
  import TicketBooking from '../images/Screenshot (24).png';
  import fashion from '../images/Screenshot (26).png'

const Projects = () => {
    const [header] = React.useState({
        mainHeader: "PROJECTS",
        subHeading: "My Projects",
        text:
          "I have completed  some projects.\
          There are some projects given below.",
      });
      const [state] = React.useState([
        {
          id: 1,
          image:fitnessClub,
          heading: "Fitness Club Full stack Website",
          
          programmingTools:"FrontEnd:Html,css,Bootstrap,\
          javascript,react js.\
          Backend:Node js,\
          MongoDB,Express js.\
          Tools:Vs code,Firebase,heroku,\
          chrome dev etc",
          text:
            "This is a full stackwebsite\
            it has a six section where client can choose manuy services for fitness.\
            Firebase authentication and Dashboard system applied and admin panel works very nice.\
            Client can also see his orders in dashboard.",
            github:"https://github.com/Tanvir19026/fitness-club",
            livesite:"https://fitnesscenter-9352e.web.app/"
        },
        {
          id: 2,
          image:BigBazar,
          heading: "Big-Bazar E-Commerce Website",
          programmingTools:"FrontEnd:Html,css,Bootstrap,\
          javascript,react js.\
          Backend:Node js,\
          MongoDB,Express js.\
          Tools:Vs code,Firebase,heroku,\
          chrome dev etc",
          text:
            "This is a Big Bazar shopping website\
            Here people can visit and order products.\
            At the home page we can see products details and people select product for buy now.\
            .But first things u have must log in by google.",
            github:"https://github.com/Tanvir19026/big-vazar",
            livesite:"https://bigbazar-f3c5c.web.app"
        },
        {
          id: 3,
          image:rideshare,
          heading: "Ride Share website",
          programmingTools:"FrontEnd:Html,css,Bootstrap,\
          javascript,react js,\
          Meterial UI.\
         \
          Tools:Vs code,Firebase,chrome dev,netlify etc",
          text:
            "This is a ride share website.\
            people can buy ticket for bus,bike and train from here.\
            This is totally online ticket selling service.\
            In this website i used googlemap,privateRouting,.\
            firebaseAuthentication and many other things",
            github:"https://github.com/Tanvir19026/ride-share",
            livesite:"https://city-rider-4e5ce.firebaseapp.com/"
        },
        {
          id: 4,
          image:epl,
          programmingTools:"FrontEnd:Html,css,\
          Bootstrap,javascript,react js.\
          \
           Tools:Vs code,Firebase,chrome dev,netlify etc",
          heading: "English Premier League Website",
          text:
            "This is a sports type website.\
            client can explore english premier league all teams.\
            and also see the description and banner and logo all the teams.\
            I used sportsdb api for this website.",
            github:"https://github.com/Tanvir19026/english-premere-league",
            livesite:"https://heuristic-kowalevski-eb13da.netlify.app"
        },
        {
          id: 5,
          image:TicketBooking,
          heading: "Cruise Queen Ticket Booking Website",
          programmingTools:"FrontEnd:Html,css,\
          Bootstrap,javascript.\
          \
           Tools:Vs code,Firebase,chrome dev.",
          text:
            "This a Online Ticket Booking Service.\
            Here client can apply for how many ticket he needs and\
            How much cost for this ticket.\
            this is totally a client server project.\
            Calander and sign up option added into it. ",
            github:"https://github.com/Tanvir19026/assignment04",
            livesite:"https://tanvir19026.github.io/assignment04/"
        },
        {
          id: 6,
          image:fashion,
          heading: "Tanvir E-Shoping Website",
          programmingTools:"FrontEnd:Html,css,\
          Bootstrap,javascript,\
          \
           Tools:Vs code,Firebase,chrome dev.",
          text:
            "This is a Shoping website fully e-commerce.\
            Here Buyer can Buy products and Order too.\
            Buyer can choose so many poroduct .\
            it has too many category.After all this is such a nice website.\
            Buyer can buy products all of categories but u have must sign up first.",
            github:"https://github.com/Tanvir19026/e-commerce-website",
            livesite:"https://tanvir19026.github.io/e-commerce-website/"
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
                 <img style={{width:'100%',height:'70%'}} src={info.image} alt=""/>
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <br></br>
                  <div  className="services__box-p">{info.programmingTools}</div>
                  <div className="services__box-p">
                      <button><a href={info.github} target="_blank">GithubLink</a></button>
                      <button><a href={info.livesite} target="_blank">Live site</a></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Projects;