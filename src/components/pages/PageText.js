import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const Photos = (props) => {
  const { photos, dimensions, pages, currentPage } = props;
  const handleChange = (event) => {
    setValue(event.target.value);
    props.filterHendler(event.target.value);
  };
  return (
    <div>
      {photos ? (
        <InfiniteScroll
          dataLength={photos.length}
          next={props.fetchMoreData}
          hasMore={pages - currentPage !== 0}
          loader={<h4>Loading...</h4>}
        >
          <div className="flex">
            {photos.map((photo, index) => {
              return (
                <div key={index}>
                  <img
                    id={photo.id}
                    src={photo.url}
                    onClick={() => props.imageHendler(photo)}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      ) : null}
    </div>
  );
};
export default Photos;
