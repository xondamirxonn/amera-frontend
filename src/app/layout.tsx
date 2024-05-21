import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Reduxprovider } from "@/provider/redux-provider";
import { NextAuthProvider } from "@/provider/next-auth-provider";
import Footer from "./components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amera",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Reduxprovider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <div className="sm:pt-[120px]  pt-[80px] pb-24  min-h-[100vh] dark:bg-[#020810]">
                {children}
              </div>
              <Footer />
            </ThemeProvider>
          </Reduxprovider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
