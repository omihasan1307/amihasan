import { useEffect, useState } from "react";

const useProjects = () => {
  const [project, setproject] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setproject(data));
  }, []);
  return [project, setproject];
};

export default useProjects;
