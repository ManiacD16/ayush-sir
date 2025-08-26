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
        {/* Background Layer */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 tech-grid opacity-30"></div>
          <div className="absolute inset-0 matrix-bg opacity-20"></div>

          {/* Floating blockchain nodes - responsive positioning */}
          <div className="absolute top-4 left-2 sm:top-8 sm:left-4 lg:top-20 lg:left-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-secondary/20 rounded-full float-animation blockchain-node"></div>
          <div
            className="absolute top-16 right-4 sm:top-24 sm:right-8 lg:top-40 lg:right-20 w-6 h-6 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-accent/20 rounded-full float-animation blockchain-node"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-16 left-4 sm:bottom-24 sm:left-8 lg:bottom-40 lg:left-20 w-4 h-4 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-secondary/20 rounded-full float-animation blockchain-node"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 circuit-pattern opacity-30"></div>

          {/* Code rain elements - responsive text and positioning */}
          <div className="absolute top-1/4 left-0 code-rain text-xs sm:text-sm lg:text-base" style={{ animationDelay: "0s" }}>
            <span className="hidden sm:inline">{`{blockchain: "solidity"}`}</span>
            <span className="sm:hidden">{`{sol}`}</span>
          </div>
          <div className="absolute top-1/3 right-0 code-rain text-xs sm:text-sm lg:text-base" style={{ animationDelay: "2s" }}>
            <span className="hidden sm:inline">{`web3.eth.getBalance()`}</span>
            <span className="sm:hidden">{`web3.eth`}</span>
          </div>
          <div className="absolute top-1/2 left-1/4 code-rain text-xs sm:text-sm lg:text-base" style={{ animationDelay: "4s" }}>
            <span className="hidden sm:inline">{`contract.deploy()`}</span>
            <span className="sm:hidden">{`deploy()`}</span>
          </div>
          <div className="absolute top-2/3 right-1/4 code-rain text-xs sm:text-sm lg:text-base" style={{ animationDelay: "6s" }}>
            <span className="hidden lg:inline">{`pragma solidity ^0.8.0;`}</span>
            <span className="hidden sm:inline lg:hidden">{`pragma solidity`}</span>
            <span className="sm:hidden">{`pragma`}</span>
          </div>
          <div className="absolute bottom-1/4 left-1/3 code-rain text-xs sm:text-sm lg:text-base" style={{ animationDelay: "8s" }}>
            <span className="hidden sm:inline">{`mapping(address => uint)`}</span>
            <span className="sm:hidden">{`mapping`}</span>
          </div>

          {/* Grid lines - responsive opacity and positioning */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 sm:via-secondary/30 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 sm:via-accent/30 to-transparent"></div>
          <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-secondary/15 sm:via-secondary/20 to-transparent"></div>
          <div className="absolute left-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-accent/15 sm:via-accent/20 to-transparent"></div>

          {/* Glowing orbs - responsive sizing and positioning */}
          <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/5 sm:bg-purple-500/8 lg:bg-purple-500/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/5 sm:bg-blue-500/8 lg:bg-blue-500/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-0 w-24 h-24 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-cyan-500/3 sm:bg-cyan-500/4 lg:bg-cyan-500/5 rounded-full blur-lg sm:blur-xl lg:blur-2xl animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/2 w-28 h-28 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-indigo-500/4 sm:bg-indigo-500/6 lg:bg-indigo-500/8 rounded-full blur-xl sm:blur-2xl lg:blur-3xl animate-pulse delay-500"></div>

          {/* Small animated dots - responsive sizing */}
          <div className="absolute top-8 right-8 sm:top-12 sm:right-12 lg:top-20 lg:right-20 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-16 left-4 sm:top-24 sm:left-6 lg:top-40 lg:left-10 w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 right-12 sm:bottom-16 sm:right-16 lg:bottom-32 lg:right-32 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-1.5 lg:h-1.5 bg-blue-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute top-24 right-24 sm:top-32 sm:right-32 lg:top-60 lg:right-60 w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 bg-purple-300 rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Content layer with proper z-index */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}