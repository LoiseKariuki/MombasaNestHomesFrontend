"use client";

import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "guest" | "user" | "host" | "admin";
};

const MOCK_USER: User = {
  id: "u123",
  name: "Jane Doe",
  email: "jane@example.com",
  role: "user",
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_USE_MOCK_AUTH === "true") {
      setUser(MOCK_USER);
    }
  }, []);

  return { user, setUser };
}

export function login(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    if (process.env.NEXT_PUBLIC_USE_MOCK_AUTH === "true") {
      setTimeout(() => resolve(MOCK_USER), 1000);
    } else {
      // TODO: replace with API call
      reject("Backend not implemented yet");
    }
  });
}

export function register(
  name: string,
  email: string,
  password: string,
): Promise<User> {
  return new Promise((resolve, reject) => {
    if (process.env.NEXT_PUBLIC_USE_MOCK_AUTH === "true") {
      setTimeout(
        () =>
          resolve({
            id: "u124",
            name,
            email,
            role: "user",
          }),
        1000,
      );
    } else {
      reject("Backend not implemented yet");
    }
  });
}

export function logout(setUser: (u: User | null) => void) {
  setUser(null);
}
