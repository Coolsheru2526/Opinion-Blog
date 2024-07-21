// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "opinion-blog-13b61.firebaseapp.com",
  projectId: "opinion-blog-13b61",
  storageBucket: "opinion-blog-13b61.appspot.com",
  messagingSenderId: "1063235706636",
  appId: "1:1063235706636:web:5f570b450b40e429b13329"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
