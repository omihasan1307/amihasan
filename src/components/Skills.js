import React, { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";

const Skills = () => {
  const { skill } = useContext(GlobalContext);
  return (
    <div className="lg:px-32 bg-bgblur" id="skills">
      <h1 className="text-5xl text-center font-bold py-16">
        My <span className="special-color ">Skils</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 px-5 pb-20">
        {skill.map((e) => (
          <div
            key={e.id}
            className="text-center bg-white rounded-xl p-7 shadow-xl  hover:scale-105 duration-200"
            data-aos="flip-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={e.icon} className="w-28 h-28 mx-auto " alt="" />
            <h1 className="my-5 font-bold text-2xl">{e.skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
