import React from "react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import PortalNavbar from "@/components/PortalNavbar";
import AuthFooter from "@/components/AuthFooter";
import { AuthProvider } from "../providers/authProvider";

import { auth } from "@/auth";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maryland Consultancy - Study Abroad",
  description:
    "The best study abroad agency in sri lanka over 6+ years of experience",
};

export default async function WelcomePortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <AuthProvider session={session}>
      <html lang="en">
        <body className={`${raleway.className} antialiased`}>
          <PortalNavbar />
          {children}
          <AuthFooter />
        </body>
      </html>
    </AuthProvider>
  );
}
