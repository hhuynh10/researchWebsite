import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/FloatingNavbar";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Research Portfolio",
  description: "A portfolio for showcasing our innovative research across diverse fields, highlighting our team’s work, findings, and collaborations within NEIU and CAHSI ARG group.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FloatingNav navItems={navItems} />
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
