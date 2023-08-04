"use client";

import React, { createContext, useState, useContext } from "react";

interface AuthContextData {
  login: (username: string, password: string) => void;
  logout: () => void;
}

interface ClientLayoutProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: ClientLayoutProps) => {
  const login = (username: string, password: string) => {
    //   Aqui você faria uma lógica de autenticação adequada
    //   Pode ser uma requisição para um servidor, por exemplo
    //   Neste exemplo simples, vamos considerar que a autenticação é bem-sucedida
    const fakeUserId = 1;
    //   setUser({
    //     id: fakeUserId,
    //     username,
    //   });
  };

  const logout = () => {
    //   setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
