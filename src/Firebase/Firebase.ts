import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCUged_io24QmBvGmi_JeRSIKunlpbrk18",
  authDomain: "e-commerce-78a62.firebaseapp.com",
  projectId: "e-commerce-78a62",
  storageBucket: "e-commerce-78a62.firebasestorage.app",
  messagingSenderId: "963330114897",
  appId: "1:963330114897:web:493444244c00a6da58bf70",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;