"use client";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Nav, Footer } from "@/components";
import { createContext, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
const inter = Roboto_Mono({ subsets: ["latin"] });


export const ThemeContext = createContext("");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");
  // const theme = useContext(ThemeContext);
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Exams-X" />
        <meta name="generator" content="Next.js" />
        <meta
          name="keywords"
          content="naec, naec.ge, exams, exams-x, ex, ex-x, gamocdebi, erovnuli, erovnulebi, erovnuli gamocdebi, gamocdebi 2023, gamocdebi 2024, 2023, 2024, testebi, erovnulis testebi, naec.ge testebi, momzadeba, momzadeba gamocdebistvis, momzadeba erovnulebistvis, ertiani erovnuli gamocdebi, naec gamocdebi, gamocdebistvis momzadeba, mzadeba, universiteti, universitetebi, Exams, Exams-X, გამოცდები, ეგზამს-იქს, ეგზამს, ექს-იქს, ეროვნული, ეროვნულები, ეროვნული გამოცდები, გამოცდები 2023,გამოცდები 2024, ტესტები, ეროვნულის ტესტები, ნაეკ ტესტები, მომზადება, მომზადება გამოცდებისთვის, მომზადება ეროვნულებისთვის, ერთიანი ეროვნული გამოცდები, ნაეკ გამოცდები, გამოცდებისთვის მომზადება, მზადება, უნივერსიტეტი, უნივერსიტეტები, math, matematika, momzadeba matematikashi, repetitorebi, repetitori, inglisuri, momzadeba inglisurshi, maswavlebeli, qartuli, momzadeba qartulshi, მათემატიკა, მომზადება მათემატიკაში, რეპეტიტორები, რეპეტიტორი, ინგლისური, მომზადება ინგლისურში, მასწავლებელი, ქართული, მომზადება ქართულში"
        />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="creator" content="Jemal Mtskerashvili" />
        <link rel="icon" href="/ex-x-2.png" />
        <meta
          name="description"
          content="Exams-X პროექტი არის მოსწავლეზე ორიენტირებული და ემსახურება მათ მომზადებას ერთიანი ეროვნული გამოცდებისთვის -  EX-X"
        />
        <title>Exams-X</title>
      </head>
      <body className={inter.className + " dark:text-white"}>
        <ThemeContext.Provider value="light">
          <Nav toggle={(e: string) => setTheme(e)} />
          <main className="dark:bg-black min-h-screen">{children}</main>
          <Footer theme={theme} />
        </ThemeContext.Provider>
        <Analytics />
      </body>
    </html>
  );
}
