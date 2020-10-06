import { useState, useEffect } from "react";
import firebase from "../firebase/config";

const useFirestore = (category) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [last, setLast] = useState(false);

  const secondDoc = () => {
    const db = firebase
      .firestore()
      .collection("photos")
      .orderBy("createdAt", "desc")
      .limit(4)
      .where(`category`, "==", `${category}`);

    let next = db.startAfter(last).limit(4);
    next
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
          const images = [];
          querySnapshot.forEach((doc) => {
            images.push({ id: doc.id, ...doc.data() });
          });
          setPhotos(photos.concat(images));
          setLast(lastVisible);
        } else {
          setHasMore(false);
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  const firstDocs = () => {
    const collectionRef = firebase
      .firestore()
      .collection("photos")
      .orderBy("createdAt", "desc")
      .limit(4)
      .where(`category`, "==", `${category}`);
    setIsLoading(true);
    setError(false);

    collectionRef
      .get()
      .then(function (querySnapshot) {
        let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        const images = [];
        querySnapshot.forEach(function (doc) {
          images.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPhotos(images);
        setLast(lastVisible);
        setIsLoading(false);
      })
      .catch(function (error) {
        setError(true);
      });
  };

  useEffect(() => {
    firstDocs();
  }, [category]);

  return { photos, isLoading, hasMore, error, secondDoc };
};

export default useFirestore;
