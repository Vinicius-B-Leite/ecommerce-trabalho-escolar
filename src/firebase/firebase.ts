// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, CollectionReference, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBK5rvBQgdKx2MF5pg_DLIzXvlQD6HLsSg",
    authDomain: "ecommerce-c7b20.firebaseapp.com",
    databaseURL: "https://ecommerce-c7b20-default-rtdb.firebaseio.com",
    projectId: "ecommerce-c7b20",
    storageBucket: "ecommerce-c7b20.appspot.com",
    messagingSenderId: "1062997600785",
    appId: "1:1062997600785:web:0b760faf9d411bd8bcdfb0",
    measurementId: "G-4L7KYZ4KF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


export const colecaoCarriho = collection(db, 'carrinho')
