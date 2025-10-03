"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { Session } from "next-auth";

// ✅ Import your affiliate tracker hook
import { useAffiliateTracker } from "@/hooks/useAffiliates";

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

function AffiliateTrackerProvider({ children }: { children: ReactNode }) {
  // ✅ Call hook once at the top level of the app
  useAffiliateTracker();
  return <>{children}</>;
}

export default function AppProviders({ children, session }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          {/* ✅ Wrap children so affiliate tracking runs globally */}
          <AffiliateTrackerProvider>{children}</AffiliateTrackerProvider>
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
