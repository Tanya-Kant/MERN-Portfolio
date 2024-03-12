import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center">Education Details</h2>
        <hr />
        <VerticalTimeline lineColor="#caebf2">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#caebf2", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #caebf2" }}
            date="2021- present"
            iconStyle={{ background: "#0f1626", color: "#efefef" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              NIT Kurukshetra, IN
            </h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#caebf2", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #caebf2" }}
            date="2020"
            iconStyle={{ background: "#0f1626", color: "#efefef" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">Class 12th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dewan Public School, IN
            </h4>
            <p>CBSE-94.8%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
