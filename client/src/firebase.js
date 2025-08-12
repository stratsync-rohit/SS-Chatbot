import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVyovmUsGl5u7ovIoJHSbq6TP-zWUCiKU",
  authDomain: "instashare-b328c.firebaseapp.com",
  projectId: "instashare-b328c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
