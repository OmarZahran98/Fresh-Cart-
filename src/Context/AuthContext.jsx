import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../Services/services";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [UserInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("IsToken");

        if (!token) {
          setIsLoading(false);
          return;
        }

        const response = await verifyToken();

        if (response.success) {
          setIsAuthenticated(true);
          setUserInfo(response.data.decoded);
        } else {
          localStorage.removeItem("IsToken");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("IsToken");
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem("IsToken");
    setIsAuthenticated(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        UserInfo,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
