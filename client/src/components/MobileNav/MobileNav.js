import React, { useState } from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { TiHome } from "react-icons/ti";
import { IoChatboxOutline } from "react-icons/io5";
import { PiBagSimpleFill } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { AiFillProject } from "react-icons/ai";
import { LuContact2 } from "react-icons/lu";
import { MdMenuOpen } from "react-icons/md";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <MdMenuOpen
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">Tanya Kant</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <LuContact2 />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
