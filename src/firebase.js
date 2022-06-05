import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9pTFOVMHmcBzX-bKtFVBPUzfpGK2Z5kw",
  authDomain: "web1final.firebaseapp.com",
  projectId: "web1final",
  storageBucket: "web1final.appspot.com",
  messagingSenderId: "804787153864",
  appId: "1:804787153864:web:6e361eeeb1bc5a7c3d2efd"
};

firebase.initializeApp(firebaseConfig);
export { firebase };