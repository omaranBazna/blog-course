
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCXHGo1JUQ0iG8FmT5TLfhALTcgNrVPuv4",
  authDomain: "blog-course-1c302.firebaseapp.com",
  projectId: "blog-course-1c302",
  storageBucket: "blog-course-1c302.appspot.com",
  messagingSenderId: "785158205639",
  appId: "1:785158205639:web:b22ceba4e6ca67ccc60ee2"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();