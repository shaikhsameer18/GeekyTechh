// import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import Preloader from "./components/Preloader";
import { Banner } from "./components/Banner";
// import { Services } from "./components/Services";
import Services from "./components/Services";
// import { Skills } from "./components/Skills";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TeamDescription from "./components/TeamDescription";

function App() {
  return (
    <>
      <Preloader /> {/* Add the Preloader component here */}
      <div className="App">
        <NavBar />
        <Banner />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <TeamDescription />
        <Footer />
      </div>
    </>
  );
}

export default App;
