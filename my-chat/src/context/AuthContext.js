import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
//i create this auth to use in all my components without having to pass props
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {
  let token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log("User", user);
  useEffect(() => {
    const user = localStorage.getItem("User");
    setUser(JSON.parse(user));
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
