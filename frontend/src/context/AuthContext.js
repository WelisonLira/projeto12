import React, { createContext, useState, useEffect } from "react";
import { getUserByToken, logoutUser } from "../utils/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const usuario = await getUserByToken(token);
        setUser(usuario);
      }
    };
    initAuth();
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}