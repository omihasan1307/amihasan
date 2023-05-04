import React from "react";
import facebook from "../img/fb.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-20 lg:px-36 p-5 bg-bgblur ">
        <div>
          <Link className="text-xl sm:text-3xl font-semibold special-color">
            Ami Hasan
          </Link>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/omihasansakin"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={facebook} className="w-8" alt="fb" />
            </a>
            <a
              href="https://www.linkedin.com/in/ami-hasan-1699061b1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="w-8" alt="fb" />
            </a>
            <a
              href="https://github.com/omihasan1307"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="w-8" alt="fb" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
