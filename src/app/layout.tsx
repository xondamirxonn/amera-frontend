import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Reduxprovider } from "@/provider/redux-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
        <Reduxprovider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="sm:pt-[120px]  pt-[80px] pb-20 bg-[#F5F6F9 ] min-h-[100vh] dark:bg-[#020810]">
              {children}
            </div>
          </ThemeProvider>
        </Reduxprovider>
      </body>
    </html>
  );
}
