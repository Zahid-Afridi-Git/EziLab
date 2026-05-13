import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVrvoQfAqc6UE-tAo-_vbwcNRLSVOZn_c",
  authDomain: "ezilab-fd0bf.firebaseapp.com",
  projectId: "ezilab-fd0bf",
  storageBucket: "ezilab-fd0bf.firebasestorage.app",
  messagingSenderId: "280833821259",
  appId: "1:280833821259:web:02bda6748652d3224f5bce",
  measurementId: "G-4Y669697BZ",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
