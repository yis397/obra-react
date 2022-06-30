import {  signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { googleAuth,auth} from "../../firebase/fireConfig";

export const AuthGoogle=()=>{
    return async(dispatch:any,getState:any)=>{
         signInWithPopup(auth, googleAuth)
           .then((result) => {
             // This gives you a Google Access Token. You can use it to access the Google API.

             const credential = GoogleAuthProvider.credentialFromResult(result);
             const token = credential?.accessToken 
             // The signed-in user info.
             const user = result.user;
             console.log(user);
             // ...
           }).catch((error) => {
             // Handle Errors here.
             const errorCode = error.code;
             const errorMessage = error.message;
             // The email of the user's account used.
             const email = error.customData.email;
             // The AuthCredential type that was used.
             const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
}

export const registerEmail=()=>{
    return async(dispatch:any,getState:any)=>{
        createUserWithEmailAndPassword(auth, 'yourwill_bloodjahm@hotmail.com', '123456')
      .then((res) => {
          console.log(res.user)
        })
      .catch(err => console.log(err.message))
    }
}