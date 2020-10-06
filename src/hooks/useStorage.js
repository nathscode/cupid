import { useState, useEffect } from "react";
import firebase from "../firebase/config";
import "firebase/storage";
import "firebase/firestore";

const useStorage = (data) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  console.log("useStorage", data);
  const cate = data.category.toString().toLowerCase();
  const files = data.files;
  const collectionRef = firebase.firestore().collection("photos");
  const storageRef = firebase.storage();
  files.forEach((file) => {
    const uploadTask = storageRef
      .ref()
      .child(`cupid-images/${file.name}`)
      .put(file);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const isUploading = true;
        setIsUploading(isUploading);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (snapshot.state === firebase.storage.TaskState.RUNNING) {
          setProgress(progress);
        }
      },
      (error) => {
        setError("Error Occurred");
        console.log(error.code);
      },
      async () => {
        const url = await uploadTask.snapshot.ref.getDownloadURL();
        const timestamp = firebase.firestore.FieldValue.serverTimestamp;
        const uploadData = {
          category: cate,
          url: url,
          createdAt: timestamp(),
        };
        console.log(uploadData);
        collectionRef.add(uploadData);
        setUrl(url);
        const isUploading = false;
        setIsUploading(isUploading);
      }
    );
  });
  useEffect(() => {
    if (!isUploading) return;
  }, [isUploading]);

  return { progress, url, error, isUploading };
};

export default useStorage;

/*

for (let i = 0; i < data.files.length; i++) {
      let files = data.files[i];
      const storageRef = firebase
        .storage()
        .ref(`cupid-images/${files.name}`)
        .put(files);
      storageRef.on(
        "state_changed",
        (snap) => {
          const isUploading = true;
          setIsUploading(isUploading);
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
          console.log(error);
        },
        async () => {
          firebase
            .storage()
            .ref("cupid-images")
            .child(files.name)
            .getDownloadURL()
            .then((url) => {
              const isUploading = false;
              setIsUploading(isUploading);
              const category = photoCategory;
              const createdAt = timestamp();
              const uploadData = {
                category: category,
                url: url,
                createdAt: createdAt,
              };
              console.log(uploadData);
              collectionRef.add(uploadData);
              setUrl(url);
            });
        }
      );
    }


*/
