import type React from "react"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "Ayush Rai | Senior Blockchain Developer",
  description: "Senior Blockchain Developer specializing in Solidity, Web3, and crypto wallet development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased dark`}>
      <body className="min-h-screen bg-slate-900 text-slate-100 relative overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 tech-grid opacity-30"></div>
          <div className="absolute inset-0 matrix-bg opacity-20"></div>

          <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full float-animation blockchain-node"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full float-animation blockchain-node"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/20 rounded-full float-animation blockchain-node"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="absolute inset-0 circuit-pattern opacity-30"></div>

          <div className="absolute top-1/4 left-0 code-rain" style={{ animationDelay: "0s" }}>
            {`{blockchain: "solidity"}`}
          </div>
          <div className="absolute top-1/3 right-0 code-rain" style={{ animationDelay: "2s" }}>
            {`web3.eth.getBalance()`}
          </div>
          <div className="absolute top-1/2 left-1/4 code-rain" style={{ animationDelay: "4s" }}>
            {`contract.deploy()`}
          </div>
          <div className="absolute top-2/3 right-1/4 code-rain" style={{ animationDelay: "6s" }}>
            {`pragma solidity ^0.8.0;`}
          </div>
          <div className="absolute bottom-1/4 left-1/3 code-rain" style={{ animationDelay: "8s" }}>
            {`mapping(address => uint)`}
          </div>

          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
          <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
          <div className="absolute left-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>

          <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute top-60 right-60 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-300"></div>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
