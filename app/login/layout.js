import "@/app/globals.css";
import { NextAuthProvider } from "@/app/providers/NextAuthProvider";
import { Montserrat } from "next/font/google";


export const metadata = {
  title: "Login with Spotify",
  description: "Login page to authenticate through Spotify",
};

export default function LoginPageLayout({
  children,
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>
          <main>{children}</main>
        </body>
      </NextAuthProvider>
    </html>
  );
}
