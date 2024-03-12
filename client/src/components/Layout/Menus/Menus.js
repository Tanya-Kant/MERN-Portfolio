import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import { TiHome } from "react-icons/ti";
import { IoChatboxOutline } from "react-icons/io5";
import { PiBagSimpleFill } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { AiFillProject } from "react-icons/ai";
import { LuContact2 } from "react-icons/lu";
import ProfilePic from "D:/MERN STACK/MERN-Portfolio/client/src/assets/images/profile-picture.jpg";
import Zoom from "react-reveal/Zoom";

const Menus = ({ toggle }) => {
  //destructured toggle
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={ProfilePic} alt="profile pictur" />
            </div>
          </Zoom>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <TiHome />
                  Home
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoChatboxOutline />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <SiGooglescholar />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="tech-stack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <BsLaptop />
                  Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <PiBagSimpleFill />
                  Work experience
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <AiFillProject />
                  Project
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <LuContact2 />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <TiHome title="Home" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoChatboxOutline title="About" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <SiGooglescholar title="Education" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="tech-stack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <BsLaptop title="Tech Stack" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <PiBagSimpleFill title="Work Experience" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <AiFillProject title="Project" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <LuContact2 title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Menus;
