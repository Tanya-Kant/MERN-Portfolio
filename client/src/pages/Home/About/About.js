import React from "react";
import "./About.css";
import ProfilePic from "D:/MERN STACK/MERN-Portfolio/client/src/assets/images/profile-picture.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={ProfilePic} alt="profile pictur" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Hey there! I'm Tanya Kant, a passionate tech enthusiast currently
              pursuing a B.Tech degree at the National Institute of Technology,
              Kurukshetra. I find immense joy in the world of web development,
              continuously exploring technologies like Java, HTML, CSS,
              JavaScript, MongoDB, Express.js, React, and Node.js. My journey in
              tech is not just about code; it's about creating seamless,
              user-centered digital experiences. Beyond code, I'm a well-rounded
              individual who values soft skills. My interests encompass
              communication, problem-solving, event management, and leadership.
              As a tech enthusiast, my goal is to keep pushing the boundaries of
              what's possible in the digital realm.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
