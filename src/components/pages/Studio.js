import React from "react";
import PhotoList from "./PhotoList";
import Loader from "../layout/Loader";
import useFirestore from "../../hooks/useFirestore";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const Studio = () => {
  let category = "studio";
  const { photos, isLoading, error, hasMore, secondDoc } = useFirestore(
    category
  );

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMorePhotos);

  function fetchMorePhotos() {
    if (error || isLoading || !hasMore) return;
    setTimeout(() => {
      secondDoc();
      setIsFetching(false);
    }, 2000);
  }
  const checking = !hasMore ? (
    <p className="spacer">No more photos</p>
  ) : (
    <p className="spacer">Fetching more photos...</p>
  );
  return (
    <main className="main">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="row">
          {photos &&
            photos.map((photo) => {
              return <PhotoList photo={photo} key={photo.id} />;
            })}
          {isFetching && checking}
        </div>
      )}
      {error && <p>Error loading images</p>}
    </main>
  );
};

export default Studio;
