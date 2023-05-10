import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../ACTION/logout";


export const LoginContext = createContext();

export function LoginProvider(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  function setLoggedIn(value) {
    setIsLoggedIn(value);
  }

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
    dispatch(logoutUser());
    localStorage.removeItem('storedUser');
  }
  

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, setLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
}
