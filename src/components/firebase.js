import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpXL8XtPCctpZJSadHMdSdBp7_QY0xn7s",
  authDomain: "login-auth-c0409.firebaseapp.com",
  projectId: "login-auth-c0409",
  storageBucket: "login-auth-c0409.appspot.com",
  messagingSenderId: "54326155513",
  appId: "1:54326155513:web:b26da888a13517faa02a28"
};


const app = initializeApp(firebaseConfig);


export const auth=getAuth();
export const db=getFirestore(app);
export default app;