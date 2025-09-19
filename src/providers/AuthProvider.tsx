"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  id: string;
  username: string;
  role: "guest" | "student" | "host" | "admin";
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function login(username: string, password: string) {
    // For now mock; later call backend via api.post("/auth/login")
    if (username === "admin") {
      setUser({ id: "1", username, role: "admin" });
    } else {
      setUser({ id: "2", username, role: "guest" });
    }
  }

  async function register(username: string, password: string) {
    // Mock register
    alert(`Registered user ${username}`);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useUser must be used inside AuthProvider");
  return ctx;
}
