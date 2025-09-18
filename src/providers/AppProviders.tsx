"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { Session } from "next-auth";

// Initialize React Query client for server-state management
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      gcTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

type AppProvidersProps = {
  children: ReactNode;
  /** Optional session object for SSR (NextAuth) */
  session?: Session | null;
};

export default function AppProviders({ children, session }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Provides NextAuth session context to the entire app */}
      <SessionProvider session={session} refetchInterval={5 * 60}>
        {/* Provides theming support (light/dark mode) */}
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          {children}
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
