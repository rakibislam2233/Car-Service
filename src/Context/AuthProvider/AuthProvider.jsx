import React, { createContext,useEffect,useState } from "react";
export const UserContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loogedUser=>{
            setUser(loogedUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
  return <UserContext.Provider value={authInfo}>
    {children}
    </UserContext.Provider>;
};

export default AuthProvider;
