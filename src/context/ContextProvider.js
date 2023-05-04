import React, { createContext } from "react";
import useProjects from "../Hooks/useProjects";
import useSkills from "../Hooks/useSkills";
export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [skill] = useSkills();
  const [project] = useProjects();
  const shared = { skill, project };
  return (
    <GlobalContext.Provider value={shared}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
