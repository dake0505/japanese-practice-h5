import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyBgjNxcZqSH_xUnb7buABmupvXO5_5XXxs",
  authDomain: "japanese-practice-51c3c.firebaseapp.com",
  databaseURL: "https://japanese-practice-51c3c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "japanese-practice-51c3c",
  storageBucket: "japanese-practice-51c3c.appspot.com",
  messagingSenderId: "352708766934",
  appId: "1:352708766934:web:2653ee40a47f854e792d77",
  measurementId: "G-GJ4KNK49V6"
};



const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp
