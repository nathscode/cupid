import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCPLORISFGETvNIZLbfcHyA2yvX694UgAY",
  authDomain: "cupid-portfolio.firebaseapp.com",
  databaseURL: "https://cupid-portfolio.firebaseio.com",
  projectId: "cupid-portfolio",
  storageBucket: "cupid-portfolio.appspot.com",
  messagingSenderId: "49133173889",
  appId: "1:49133173889:web:d281d818d71612f5bb6180",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
});
firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

export default firebase;
