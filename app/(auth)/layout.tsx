import React from "react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import AuthNavbar from "@/components/AuthNavbar";
import AuthFooter from "@/components/AuthFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maryland Consultancy",
  description:
    "The best study abroad agency in sri lanka over 6+ years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${raleway.className} antialiased`}>
        <ToastContainer/>
        <AuthNavbar />
        {children}
        <AuthFooter />
      </body>
    </html>
  );
}