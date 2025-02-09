// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSqrazy45mvtxaTs5Z_pBVlUUUfoGSmok",
    authDomain: "floocy-feen.firebaseapp.com",
    projectId: "floocy-feen",
    storageBucket: "floocy-feen.firebasestorage.app",
    messagingSenderId: "321424572000",
    appId: "1:321424572000:web:6ff4c37fd1a198670f0d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };