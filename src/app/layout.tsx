import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "@/Layouts/Providers";
import "./globals.css";
import { Box } from "@chakra-ui/react";
import "react-circular-progressbar/dist/styles.css";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Ali Ahmadi, Personal Portfolio",
  description: "Ali Ahmadi, Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Box className="space-y-10 py-5 overflow-hidden px-4 sm:px-8 md:px-16">
            <Navbar />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
