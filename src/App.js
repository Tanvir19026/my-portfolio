import React from "react";
import "./App.css";



import Banner from './Components/Banner'

import About from "./Components/About";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import ContactForm from "./Components/ContactForm";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog";


function App() {
  return (
    <div>
    
      <Banner></Banner>
      <Nav></Nav>
      <Projects></Projects>
      <Services></Services>
      <Blog></Blog>
      <About></About>
       <ContactForm></ContactForm>
       <Contact></Contact>
      <Skills></Skills>
      
     
    
    
     

    

    
    </div>
  );
}

export default App;
