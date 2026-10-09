"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface FanUser {
  id: string;
  name: string;
  email: string;
  callsign: string;
  country: string;
  tier: "GRID PASS" | "PADDOCK VIP" | "MAX ARMY" | "MAX ARMY CHAMPION";
  avatarColor: string;
}

interface AuthContextType {
  user: FanUser | null;
  isLoggedIn: boolean;
  login: (email: string, name?: string, callsign?: string) => void;
  logout: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "max_verstappen_fan_session";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FanUser | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      // localstorage restricted
    }
  }, []);

  const login = (email: string, name?: string, callsign?: string) => {
    const displayName = name || email.split("@")[0] || "Max Army Member";
    const fanCallsign = callsign || "VER-01";

    const newUser: FanUser = {
      id: "fan_" + Math.random().toString(36).substring(2, 9),
      name: displayName,
      email,
      callsign: fanCallsign,
      country: "Netherlands",
      tier: "MAX ARMY CHAMPION",
      avatarColor: "#DB0A40",
    };

    setUser(newUser);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    } catch {
      // ignore
    }
    setIsLoginModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        isLoginModalOpen,
        openLoginModal: () => setIsLoginModalOpen(true),
        closeLoginModal: () => setIsLoginModalOpen(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
