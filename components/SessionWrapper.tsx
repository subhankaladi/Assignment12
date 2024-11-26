"use client";

import { SessionProvider } from "next-auth/react";


export const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};