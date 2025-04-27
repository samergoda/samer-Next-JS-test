import type React from "react";
import type { Metadata } from "next";
import { Volkhov } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "sonner";
import Footer from "@/components/layout/Footer";

const inter = Volkhov({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "Shop our collection of products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {/* Navbar */}
          <Navbar />

          {/* Main */}
          {children}

          {/* Toaster */}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                marginTop: "100px",
              },
            }}
          />

          {/* Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
