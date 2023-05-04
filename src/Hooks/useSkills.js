import React, { useEffect, useState } from "react";

const useSkills = () => {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkill(data));
  }, []);
  return [skill, setSkill];
};

export default useSkills;
