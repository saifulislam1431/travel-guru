import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



const auth = getAuth(app);
export const UserContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const newUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    const googleSignIn =()=>{
        return signInWithPopup(auth , googleProvider)
    }

    const facebookSignIn =()=>{
        return signInWithPopup(auth , facebookProvider)
    }


    const resetPass = (email) =>{
        return sendPasswordResetEmail(auth , email)
    }


    const logOUt = () =>{
        return signOut(auth);
    }


    const userAuth = {
        user,
        newUser,
        signInUser,
        googleSignIn,
        facebookSignIn,
        resetPass,
        logOUt,

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])
    return (
        <UserContext.Provider value={userAuth}>
            {children}
        </UserContext.Provider>
    );

};

export default AuthProvider;