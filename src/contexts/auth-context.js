import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext('authContext');

const AuthProvider = ({ children }) => {
  const localStorageAuth = localStorage.getItem("token");
  const localStorageUser = localStorage.getItem("authUser");
  const currentUser = localStorage.getItem("currentUser")
  const [authToken, setAuthToken] = useState(localStorageAuth ? localStorageAuth : "");
  const [authUser, setAuthUser] = useState(localStorageUser ? localStorageUser : null);
  const [authCurrentUser, setAuthCurrentUser] = useState(currentUser ? currentUser : null)

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('logout')
    localStorage.clear();
    setAuthToken('');
    setAuthUser(null);
    navigate("/")
  }

  // const resetFunction = () => {
  //     localStorage.removeItem("authToken");
  //     localStorage.removeItem("authUser");
  //     setAuthToken("");
  //     setAuthUser(null);
  //     dispatch({ type: CART_OPERATION, payload: { cart: [] } });
  //     dispatch({ type: WISHLIST_OPERATION, payload: { wishlist: [] } });
  //     dispatch({ type: SET_ADDRESS, payload: { address: [] } });
  //     dispatch({ type: SET_ORDERS, payload: { orders: [] } });
  //     navigate("/login");
  //   };

  return (
    <AuthContext.Provider
      value={{ authToken, setAuthToken, authUser, setAuthUser, handleLogout, authCurrentUser, setAuthCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };