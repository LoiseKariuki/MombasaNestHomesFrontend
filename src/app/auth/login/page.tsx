"use client";

import { useState } from "react";
import { login, useUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const router = useRouter();

  const handleLogin = async () => {
    const u = await login(email, password);
    setUser(u);
    router.push("/");
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>

      <button
        onClick={() => alert("Google OAuth integration coming soon")}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
      >
        Continue with Google
      </button>
    </div>
  );
}
