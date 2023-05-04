import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import img from "./omi.jpg";
import facebook from "../img/fb.png";
import twiteer from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import figma from "../img/figma.png";

const Header = () => {
  return (
    <div className="mt-3 lg:px-32 " id="header">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-2 min-h-myHeight ">
        <div
          className="col-span-1 flex items-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="text-center md:text-left lg:text-left">
            <h1 className="text-3xl ">Hello, I Am</h1>
            <h1 className="text-6xl py-2 font-semibold mb-3 mt-1 typeWriter-color">
              <Typewriter
                options={{
                  strings: [
                    "Ami Hasan",
                    "Software Engineer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className=" font-normal my-3 mb-6">
              I'm a Full Stack Developer. I'm very passionate and learning new
              technology in daily basis. Also I'm a quick learner. I'm very
              sincere about my work.
            </p>
            <button className="bg-btnColor px-14 py-3 rounded text-white hover:scale-110 hover:bg-purple-600 duration-300 ">
              <span className="font-semibold flex items-center gap-2">
                Hire Me <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </button>

            <div className="flex gap-40 mt-16 lg:mt-10">
              <div>
                <h1 className="text-gray-600 font-semibold text-left">
                  Find With Me
                </h1>
                <div className="flex items-center gap-5 mt-5">
                  <a
                    href="https://www.facebook.com/omihasansakin"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={facebook}
                      className="w-12 border p-2 rounded bg-slate-200"
                      alt="fb"
                    />
                  </a>
                  <a href="">
                    <img
                      src={twiteer}
                      className="w-12 border p-2 rounded bg-slate-200"
                      alt="fb"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ami-hasan-1699061b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      className="w-12 border p-2 rounded bg-slate-200"
                      alt="fb"
                    />
                  </a>
                </div>
              </div>
              <div>
                <h1 className="text-gray-600 font-semibold">Best Skill On</h1>
                <div className="flex items-center gap-5 mt-5">
                  <a
                    href="https://github.com/omihasan1307"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      className="w-12 border p-2 rounded bg-slate-200"
                      alt="fb"
                    />
                  </a>
                  <a
                    href="https://www.figma.com/files/recent?fuid=862551651329581193"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      src={figma}
                      className="w-12 border p-2 rounded bg-slate-200"
                      alt="fb"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-span-1 ">
          <img src={img} alt="" srcset="" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
