import React from 'react';
import { Routes ,Route,Router, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages';
import AuthRutas from './AuthRutas';
import PrivateRutas from './PrivateRutas';

import { useAppDispatch } from '../store/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/fireConfig';
import { setUser } from '../store/slices';
import { getFDatos } from '../store/slices/thunksWork';





function AppRutas() {
  const dispatch = useAppDispatch()
  const [ checking, setChecking ] = React.useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({id:user.uid,nombre:user.displayName,email:user.email}))
        setIsLoggedIn(true)
        dispatch(getFDatos(user.uid))
      } else {
        // User is signed out
        // ...
        setIsLoggedIn( false );
      }
      setChecking(false);
    }
  )}, [setChecking, setIsLoggedIn ]);

   
 

  if ( checking ) {
    return (
        <h1>Wait...</h1>
    )
}


    return (
     <BrowserRouter>
       <Routes>
         <Route path="/home" element={<HomePage/>}/>
         <Route  path="/auth/*" element={<AuthRutas/>}/>
         <Route  path="/works/*" element={<PrivateRutas  islogin={isLoggedIn}/>}/>
       </Routes>
     
     </BrowserRouter>     
    );
}

export default AppRutas;