import React from "react";
import PhotoList from "./PhotoList";
import Loader from "../layout/Loader";
import useFirestore from "../../hooks/useFirestore";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Spinner from "../layout/Spinner";

const Beauty = () => {
  let category = "beauty";
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
    <div className="spacer">
      <Spinner title="Loading more photos" />
    </div>
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

export default Beauty;
