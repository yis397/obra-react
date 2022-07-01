

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA8MuxdWIboXGJQLf0fpgqwgqzvocD1EWs",
    authDomain: "planeacion-obra.firebaseapp.com",
    projectId: "planeacion-obra",
    storageBucket: "planeacion-obra.appspot.com",
    messagingSenderId: "619665400627",
    appId: "1:619665400627:web:1d8eff7468a9bd0033d446"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db=getDatabase()
  const googleAuth=new GoogleAuthProvider()
  const auth=getAuth(app)
  export {app,db,googleAuth,auth}
  