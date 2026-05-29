import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

import React, { useState } from 'react';
import { createContext } from 'react';
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user , setUser] = useState(null);
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

        useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

    const AuthData = {user,setUser,createUser};
    
    return <AuthContext.Provider value={AuthData}>{ children }</AuthContext.Provider>;
    
};

export default AuthProvider;