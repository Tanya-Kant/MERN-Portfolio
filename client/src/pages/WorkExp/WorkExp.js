import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWebsite } from "react-icons/cg";

const workExp = () => {
  return (
    <>
      <div className=" work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center">Work Experience</h2>
          <hr />
          <VerticalTimeline lineColor="#caebf2">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#caebf2", color: "black" }}
              contentArrowStyle={{ borderRight: "7px #a9a9a9" }}
              date=" January 2024- present"
              iconStyle={{ background: "#0f1626", color: "#fff" }}
              icon={<CgWebsite />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Curaxo HealthCare
              </h4>
              <p>
                details detailsOn the other hand, we denounce with righteous
                indignation and dislike men who are so beguiled and demoralized
                by the charms of pleasure of the moment, so blinded by desire,
                that they cannot foresee the pain and trouble that are bound to
                ensue; and equal blame belongs to those who fail in their duty
                through weakness of will, which is the same as saying through
                shrinking from toil and pain.{" "}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default workExp;
