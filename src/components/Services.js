import React from "react";
import ui from "../img/ui.png";
import html from "../img/laptop.png";
import programming from "../img/programming.png";

const Services = () => {
  return (
    <div className="lg:px-32 bg-bgblur" id="services">
      <h1 className="text-5xl text-center font-bold py-16">
        My <span className="special-color ">Services</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-y-6 pb-20">
        <div
          className="col-span-1 w-10/12 mx-auto text-center bg-white rounded-3xl py-10 px-9 shadow-xl "
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={ui} className="w-20 mx-auto " alt="" />
          <h1 className="my-5 text-2xl font-bold">UI/UX Design</h1>
          <p>
            Creating basic UI/UX design using figma/adobe xd. I'm also able to
            create prototype in figma.
          </p>
        </div>
        <div
          className="col-span-1 w-10/12 mx-auto text-center bg-white rounded-3xl py-10 px-9 shadow-xl"
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={html} className="w-20 mx-auto " alt="" />
          <h1 className="my-5 text-2xl font-bold">Front End Development</h1>
          <p>
            Creating Front End using HTML/CSS, SASS, CSS Framework, Vanila JS,
            React JS/Next JS.
          </p>
        </div>
        <div
          className="col-span-1 w-10/12 mx-auto text-center bg-white rounded-3xl py-10 px-9 shadow-xl"
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={programming} className="w-20 mx-auto " alt="" />
          <h1 className="my-5 text-2xl font-bold">Back End Development</h1>
          <p>
            Create Back End server using Node JS, Express JS, MongoDB, Also I'm
            able to connectivity with database such as MongoDB/MySQL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
