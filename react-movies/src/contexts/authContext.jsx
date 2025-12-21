import { useState, createContext } from "react";
import { login, signup } from "../api/tmdb-api";

export const AuthContext = createContext(null); //eslint-disable-line

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(!!existingToken);
  const [authToken, setAuthToken] = useState(existingToken); //eslint-disable-line
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }
  const authenticate = async (username, password) => {
      const result = await login(username, password);

      if (!result.token) {
        return {
          success: false,
          message: "Username or password is incorrect",
        };
      }

      setToken(result.token);
      setIsAuthenticated(true);
      setUserName(username);

      return { success: true };
  };


  const register = async (username, password) => {
    const result = await signup(username, password);

    if (!result.success) {
      return {
        success: false,
        message:
          "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.",
      };
    }

    return {
      success: true,
      message: "The sign up is successful!",
    };
  };

  const signout = () => {
    localStorage.removeItem("token");
    setTimeout(() => setIsAuthenticated(false), 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName
      }}
    >
      {props.children} {/* eslint-disable-line */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
