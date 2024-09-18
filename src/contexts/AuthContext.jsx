/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getFromLocalStorage, removeFromLocalStorage } from "../utils";

// This component is designed to manage user authentication state globally in a React app, making it easier to handle user sessions, logins, and logouts across the application.
export const AuthContext = createContext(null);

// this is a context provider component that wraps around other components (via the children prop) and provides them access to the authentication state and functions.
const AuthContextProvider = ({ children }) => {
  // checking if there is any data from the local storage
  const data = getFromLocalStorage("userData");

  // if there is none we set it to null if there is we initialize the userData state with this data.
  const [userData, setUserData] = useState(data || null);

  // This function logs the user out by setting userData to null and removing the user data from local storage
  // When a user logs out, their session is cleared from both the app's state and the local storage, ensuring they are effectively signed out.
  const logOut = () => {
    setUserData(null);
    removeFromLocalStorage("userData");
  };

  return (
    // the AuthContext.Provider component is used to pass down the userData, setUserData, and logOut function to any child components that consume this context. Any component wrapped by AuthContextProvider can now access and modify the authentication state.

    <AuthContext.Provider value={{ userData, setUserData, logOut }}>
      {/* the children prop represents any child components that the AuthContextProvider wraps. These children components will have access to the context's values. */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
