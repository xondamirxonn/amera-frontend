"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
