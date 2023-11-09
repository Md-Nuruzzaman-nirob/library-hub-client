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
import axios from "axios";

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
    setLoader(true);
    return signOut(auth);
  };

  // auth on state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:5001/api/v1/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((data) => {
            console.log("access token", data.data);
          });
      } else {
        axios
          .post("http://localhost:5001/api/v1/jwt/logout", loggedUser, {
            withCredentials: true,
          })
          .then((data) => {
            console.log("remove cookie", data.data);
          });
      }
      setLoader(false);
    });
    () => {
      return unsubscribe;
    };
  }, [user?.email]);

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
