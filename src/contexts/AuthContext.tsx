"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { UserData, userData } from "@/utils";

interface AuthContextData {
  login: (username: string, password: string) => void;
  logout: () => void;
  user: UserData | undefined;
}

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: ClientLayoutProps) => {
  const [user, setUser] = useState<UserData>({
    id: 0,
    fullName: "...",
    firstName: "...",
    email: "...",
    cnh: "...",
    userImageUrl: "",
  });

  const fetchUserData = (): Promise<UserData> => {
    // Simula a busca de dados de usuário
    return new Promise((resolve) => {
      // Dados fictícios do usuário
      const fakeUserData: UserData = {
        id: userData.id,
        fullName: userData.fullName,
        firstName: userData.firstName,
        email: userData.email,
        cnh: userData.cnh,
        userImageUrl: userData.userImageUrl,
      };

      // Simula um atraso de 1 segundo (1000 milissegundos) para simular operação assíncrona
      setTimeout(() => {
        resolve(fakeUserData);
      }, 500);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserData = await fetchUserData();
      setUser(fetchedUserData);
    };

    fetchData();
  }, []);

  const login = (username: string, password: string) => {};

  const logout = () => {};

  return <AuthContext.Provider value={{ login, logout, user }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
