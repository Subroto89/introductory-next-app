import NextAuthSessionProvider from "@/components/SessionProvider";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Next.js App",
  description: "A Next.js 15 project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <Navbar/>
          <div className="min-h-[calc(100vh-150px)]">
            {children}
          </div>
          <Footer/>
        </NextAuthSessionProvider>
        <Toaster/>
      </body>
    </html>
  );
}