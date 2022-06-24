import { useState, createContext, useContext } from "react";
const AuthContext = createContext('authContext');

const AuthProvider = ({ children }) => {
  const localStorageAuth = localStorage.getItem("token");
  const localStorageUser = localStorage.getItem("authUser");
  const [authToken, setAuthToken] = useState( localStorageAuth ? localStorageAuth : "");
  const [authUser, setAuthUser] = useState(localStorageUser ? localStorageUser : null);

  console.log('localStorageAuth',localStorageAuth)

 

  return (
    <AuthContext.Provider
      value={{ authToken, setAuthToken, authUser, setAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };