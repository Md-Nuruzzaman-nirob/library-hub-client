import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const ContextProvider = ({ children }) => {
  // useState

  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // facebook login
  const facebookLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // auth on state
  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });

    () => {
      return onAuth;
    };
  }, []);

  const authentication = {
    googleLogin,
    facebookLogin,
    createUser,
    loginUser,
    logout,
    user,
    loader,
  };
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
