import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
const config = {
  apiKey: "AIzaSyDi9HBJXTUkdwWuGDY6MDr-zDx4pL1P8hI",
  authDomain: "wedding-guest-book-a24f9.firebaseapp.com",
  databaseURL:
    "https://wedding-guest-book-a24f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-guest-book-a24f9",
  storageBucket: "wedding-guest-book-a24f9.appspot.com",
  messagingSenderId: "515222590647",
  appId: "1:515222590647:web:238289c5ab3e7b68792932",
};

export const fire = () => {
  const app = firebase.initializeApp(config);
};
