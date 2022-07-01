import { signOut,onAuthStateChanged,signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { googleAuth,auth} from "../../firebase/fireConfig";
import { logout, setMensaje, setUser } from "./authSlice";

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
    // ...
  });
    }
}

export const registerEmail=({email,password,nombre}:{email:string,password:string,nombre:string})=>{
    return async(dispatch:any,getState:any)=>{
        createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser!, {
          displayName:nombre
        })
          
          const user=res.user
          dispatch(setUser({id:user.uid,nombre,email}))
         
        })
      .catch((err) => dispatch(setMensaje('E-en servidor')))
    }
    
}
export const loginEmail=({email,password}:{email:string,password:string})=>{
  return async(dispatch:any,getState:any)=>{

   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    dispatch(setMensaje('Correcto'))
    dispatch(setUser({id:user.uid,nombre:user.displayName,email}))
  })
  .catch((error) => {
    dispatch(setMensaje('Email/password invalidos'))
    
  });
  }
}
export const verificacionAuth=()=>{
  return (dispatch:any,getState:any)=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch(setUser({id:user.uid,nombre:user.displayName,email:user.email}))
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
}

export const cerrarSecion=()=>{
  return async(dispatch:any,getState:any)=>{
    
    signOut(auth).then(() => {
      localStorage.clear()
      dispatch(logout())
    }).catch((error) => {
      dispatch(setMensaje('error en signOut'))
      // An error happened.
    });
  }
}