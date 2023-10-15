import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import React from "react";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image";

const lexend = Lexend({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'House of Gambling',
  description: 'Raise your ROI with direct advertiser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lexend.className} relative h-screen`}>

        <div className={"text-white xl:h-screen overflow-hidden pt-4 bg-gray-950 flex flex-col justify-between relative"}>

          <div className={"absolute top-0 -left-96 w-screen h-screen overflow-hidden z-0"}>
            <Image src={"/ray_pattern.svg"} alt={"Ray"} fill={true} className={"overflow-hidden"} />
          </div>
          <div className={"absolute top-0 -right-96 w-screen h-screen overflow-hidden z-0"}>
            <Image src={"/dot_pattern.svg"} alt={"Ray"} fill={true} className={"overflow-hidden"} />
          </div>
          <Header />
              {children}
          <Footer />
        </div>

      </body>
    </html>
  )
}
