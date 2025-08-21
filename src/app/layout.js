import NextAuthSessionProvider from "@/components/SessionProvider";
import "./globals.css";

export const metadata = {
  title: "Next.js App",
  description: "A Next.js 15 project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}