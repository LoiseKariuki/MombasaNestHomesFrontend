"use client";

import { useUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: string[];
}) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    } else if (!allowedRoles.includes(user.role)) {
      router.push("/"); // redirect to home if not allowed
    }
  }, [user, router, allowedRoles]);

  if (!user) return <p>Loading...</p>;

  return <>{children}</>;
}
