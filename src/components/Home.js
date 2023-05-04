import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Project from "./Project";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTop
        component={
          <FontAwesomeIcon
            icon={faArrowUp}
            className=" hover:-translate-y-1 duration-300 hover:duration-300"
          />
        }
        style={{
          backgroundColor: "#9951E6",
          color: "white",
          borderRadius: "50px",
        }}
        smooth
      />
    </div>
  );
};

export default Home;
