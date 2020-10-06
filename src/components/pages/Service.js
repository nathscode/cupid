import React from "react";
import WorkPhotos from "./WorkPhotos";

const Service = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="row mt-3 justify-content-center">
          <div className="col three text-center plr-0">
            <div className="card">
              <span className="icon">
                <i className="bx bx-camera"></i>
              </span>
              <div className="desc">
                <h3>Photography</h3>
                <p>
                  Use various photographic techniques and lighting equipment,
                  enhance the subject’s appearance with natural or artificial
                  light, choosing and setting up location.
                </p>
              </div>
            </div>
          </div>
          <div className="col three text-center plr-0">
            <div className="card">
              <span className="icon">
                <i className="bx bx-image"></i>
              </span>
              <div className="desc">
                <h3>Image processing</h3>
                <p>
                  Composition of photographs using photo-enhancing software for
                  editing and retouching images reproducing and framing
                  photographs.
                </p>
              </div>
            </div>
          </div>
          <div className="col three text-center plr-0">
            <div className="card">
              <span className="icon">
                <i className="bx bx-video-recording"></i>
              </span>
              <div className="desc">
                <h3>Videography</h3>
                <p>
                  Analyze and plan coverage of videos composition, editing and
                  effects, in various fields cinematography, short clips,
                  filming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkPhotos />
    </main>
  );
};

export default Service;
