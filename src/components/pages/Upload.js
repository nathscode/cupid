import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import { isEmpty } from "react-redux-firebase";
import firebase from "../../firebase/config";
import "firebase/storage";
import "firebase/firestore";
import ProgressBar from "../layout/ProgressBar";

const Upload = (props) => {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const types = ["image/png", "image/jpg", "image/jpeg"];
  const newFiles = [];
  const fileArr = [];
  let count = 1;

  const fileChangeHandler = (e) => {
    fileArr.push(...e.target.files);
    for (let i = 0; i < fileArr.length; i++) {
      let selected = fileArr[i];
      count++;
      if (fileArr && types.includes(selected.type)) {
        if (typeof selected != "undefined") {
          var size = parseFloat(selected.size / (1024 * 1024)).toFixed(2);
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1500,
            useWebWorker: true,
          };
          if (size > 1) {
            imageCompression(selected, options)
              .then(function (compressedFile) {
                newFiles.push(compressedFile);
              })
              .catch(function (error) {});
          } else {
            newFiles.push(selected);
          }
        } else {
          setError("This browser does not support HTML5.");
        }
        setFiles(newFiles);

        setError("");
      } else {
        setFiles([]);
        setError("Please select a valid image file (png, jpg or jpeg)");
      }
    }
  };
  console.log("counter", count);
  function closeModal() {
    let btn = document.querySelector(".modal-btn");
    btn.click();
    window.location.reload();
  }

  const cate = category.toString().toLowerCase();
  const collectionRef = firebase.firestore().collection("photos");
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const submitForm = (e) => {
    e.preventDefault();

    if (isEmpty(category) && files.length === 0) {
      setError("category or file cannot be empty");
      return;
    }
    // for (let i = 0; i < files.length; i++) {
    //   let selected = files[i];
    //   const storageRef = firebase
    //     .storage()
    //     .ref(`cupid-images/${selected.name}`)
    //     .put(selected);
    //   storageRef.on(
    //     "state_changed",
    //     (snap) => {
    //       const isUploading = true;
    //       setIsUploading(isUploading);
    //       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //       setProgress(percentage);
    //     },
    //     (err) => {
    //       setError(err);
    //     },
    //     async () => {
    //       firebase
    //         .storage()
    //         .ref("cupid-images")
    //         .child(selected.name)
    //         .getDownloadURL()
    //         .then((url) => {
    //           const isUploading = false;
    //           setIsUploading(isUploading);
    //           const createdAt = timestamp();
    //           const uploadData = {
    //             category: cate,
    //             url: url,
    //             createdAt: createdAt,
    //           };
    //           collectionRef.add(uploadData);
    //           setUrl(url);
    //         });
    //     }
    //   );
    // }
    console.log("files", files);
    setCategory("");
    setFiles([0]);
  };

  const label =
    files && files.length > 1
      ? `${count} images selected`
      : `${files.map((file) => file.name)} `;
  return (
    <form onSubmit={submitForm}>
      {count}
      <h4 style={{ fontSize: "1.5rem" }}>Make an upload</h4>
      <div className="mtb-2">
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          name="category"
          placeholder="Enter photo category"
          className="form-input"
          value={category}
        />
      </div>
      <div className="mtb-4">
        <input
          onChange={fileChangeHandler}
          type="file"
          name="file"
          id="file"
          className="input-file"
          multiple
        />
        <label htmlFor="file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
          </svg>
          <span>{files.length === 0 ? "Choose a file..." : label}</span>
        </label>
      </div>
      <div className="error-section">
        {error && <p className="error-text">{error}</p>}
        {isUploading ? <ProgressBar /> : ""}
        <ProgressBar />
      </div>

      <div className="mtb-2">
        <input
          type="submit"
          value="Upload"
          style={{ width: "100%", height: "40px" }}
          className="button button-primary"
        />
      </div>
    </form>
  );
};

export default Upload;
