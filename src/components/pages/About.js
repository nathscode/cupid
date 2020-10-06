import React from "react";
import WorkPhotos from "./WorkPhotos";

const About = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="row mt-3 justify-content-center">
          <div className="col two">
            <div className="about-image">
              <img
                src="./assets/img/about.jpg"
                className="img-responsive"
                alt=""
              />
            </div>
          </div>
          <div className="col two">
            <div className="about-content">
              <h3>About Me</h3>
              <p>
                The objective of my photos is for people to relive those moments
                and sensations, without losing any detail.
                <br />
                <br />
                I'm Eravwodoke Christabell, known by my brand name cupidshotit,
                a Nigerian based photographer working mainly in the field of
                wedding, event, fashion, portrait and travel photography.
                <br />
                <br />I am a simple person, in love with the natural and
                spontaneous; I love traveling, learning, listening and sharing
                every of my experience through my photography.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WorkPhotos />
    </main>
  );
};

export default About;
