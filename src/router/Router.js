import { createBrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{}],
  },
  // <Link to="#projects">projects</Link>,
  // <HashLink smooth to="/path#projects">
  //   Projects
  // </HashLink>,
]);
export default router;
