"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface TanStackProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const TanStackProvider = ({ children }: TanStackProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanStackProvider;
