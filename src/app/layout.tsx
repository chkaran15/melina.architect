import "@/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import AppLayout from "@/components/layout/AppLayout";

export const metadata: Metadata = {
  title: "Melian.architect",
  description: "A design studio crafting timeless digital experiences for visionary brands.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <AppLayout>{children}</AppLayout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
