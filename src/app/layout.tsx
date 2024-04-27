import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
// ..
// AOS.init();

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
      <body className={inter.className}>
        <Theme>
          {children}
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
