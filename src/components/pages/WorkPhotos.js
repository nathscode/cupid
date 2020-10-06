import React from "react";
import WorkPhotoList from "./WorkPhotoList";

const WorkPhotos = () => {
  const photoBook = {
    projects: [
      { id: "1", image: "./assets/img/model/work-1.jpg" },
      { id: "2", image: "./assets/img/model/work-2.jpg" },
      { id: "3", image: "./assets/img/model/work-3.jpg" },
      { id: "4", image: "./assets/img/model/work-4.jpg" },
      { id: "5", image: "./assets/img/model/work-5.jpg" },
      { id: "6", image: "./assets/img/model/work-6.jpg" },
      { id: "7", image: "./assets/img/model/work-7.jpg" },
      { id: "8", image: "./assets/img/model/work-8.jpg" },
    ],
  };
  const photos = photoBook.projects;
  return (
    <div className="work-entry text-center">
      <h2>
        <i className="bx bxs-camera-plus"></i> my work
      </h2>
      {photos &&
        photos.map((photo) => {
          return <WorkPhotoList photo={photo} key={photo.id} />;
        })}
    </div>
  );
};

export default WorkPhotos;
