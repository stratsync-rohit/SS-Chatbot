// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVyovmUsGl5u7ovIoJHSbq6TP-zWUCiKU",
  authDomain: "instashare-b328c.firebaseapp.com",
  projectId: "instashare-b328c",
  storageBucket: "instashare-b328c.appspot.com",
  messagingSenderId: "552445805110",
  appId: "1:552445805110:web:833842421ea3ac1b8ece97",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
