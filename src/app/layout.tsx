import { Alert } from "@/features/Alert/Alert";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ModalsWrapper } from "@/shared/ui/ModalsWrapper/ModalsWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <ModalsWrapper />
        {children}
      </body>
    </html>
  );
}
