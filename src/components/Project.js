import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAsterisk, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";

const Project = () => {
  const { project } = useContext(GlobalContext);

  return (
    <div className="lg:px-32 mb-20" id="projects">
      <h1 className="text-5xl text-center font-bold py-16">
        My <span className="special-color ">Project</span>
      </h1>
      {project.map((e) => (
        <div className="grid lg:grid-cols-3  gap-2 mb-8 rounded-xl">
          <div className="col-span-1 ">
            <img
              src={e.image}
              className="h-full w-full object-cover rounded-lg shadow-lg"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              alt=""
            />
          </div>
          <div
            className="lg:col-span-2  p-3"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="text-2xl font-semibold mb-2 text-textColor">
              {e.project}
            </h1>
            <div className="mt-3 mb-5">
              {e.features.map((f) => (
                <ul>
                  <li className="mb-1 ml-5">
                    <FontAwesomeIcon
                      icon={faAsterisk}
                      className="mr-3 text-textColor"
                    />
                    {f.feature}
                  </li>
                </ul>
              ))}
            </div>
            {e.technology.map((t) => (
              <>
                <button className="px-4 py-2 mb-4 bg-btnColor mr-3 text-white rounded-md">
                  {t.name}
                </button>
              </>
            ))}
            <div>
              <button className="px-4 py-2 bg-slate-200 mr-3 rounded-md">
                <a href={e.links.live} target="_blank ">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-textColor mr-1"
                  />{" "}
                  Live site
                </a>
              </button>

              <button className="px-4 py-2 bg-slate-200 mr-3 rounded-md">
                <a href={e.links.client} target="_blank ">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-textColor mr-1"
                  />{" "}
                  Client Side
                </a>
              </button>
              {e.links.server && (
                <button className="px-4 py-2 bg-slate-200 mr-3 rounded-md">
                  <a href={e.links.server} target="_blank ">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-textColor mr-1"
                    />{" "}
                    Live server
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
