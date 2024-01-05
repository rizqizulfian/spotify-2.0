"use client"
import { Inter } from 'next/font/google'
import { NextAuthProvider } from "@/app/providers/NextAuthProvider";
import { RecoilRoot } from "recoil";
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <RecoilRoot>
          <body className={inter.className}>{children}</body>
        </RecoilRoot>
      </NextAuthProvider>
    </html>
  )
}
