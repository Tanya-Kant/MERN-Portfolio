import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center">Projects</h2>
        <hr />
        <p className="pb-3 text-center">
          Here is my work on recent projects with live links and source code.
          {/* write 50 words about your project work */}
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card-rounded">
              <div className="card image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*_GVghNAnGN_b3ctArLFbDA.png"
                  alt="project1"
                />
                <div />
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">mongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-c">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Aynat Shopping Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Tanya-Kant/kaynat_shop_stop"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-rounded">
              <div className="card image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*_GVghNAnGN_b3ctArLFbDA.png"
                  alt="project1"
                />
                <div />
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">mongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-c">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Aynat Shopping Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Tanya-Kant/kaynat_shop_stop"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-rounded">
              <div className="card image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*_GVghNAnGN_b3ctArLFbDA.png"
                  alt="project1"
                />
                <div />
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">mongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-c">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Aynat Shopping Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Tanya-Kant/kaynat_shop_stop"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Projects;
