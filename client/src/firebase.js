
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVyovmUsGl5u7ovIoJHSbq6TP-zWUCiKU",
  authDomain: "stratsyncai.firebaseapp.com",
  projectId: "stratsyncai",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


