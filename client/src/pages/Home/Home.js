import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/TanyaKant_resume.pdf";
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonFill } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonFill size={20} />
          ) : (
            <PiSunFill size={25} />
          )}
        </div>
        <div className="container home-content">
          <h2>
            <p>Hey! This is</p>
          </h2>{" "}
          <h1>Tanya Kant</h1>
          <h4>and I'm a</h4>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "React Native Developer",
                  "DSA Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 65,
              }}
            />{" "}
          </h3>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="Tanya_Kant.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
